import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { MainPageWrapper, PreviewLine, PreviewLines, TabConfigurator, Thanks } from './MainPage.styles';
import { sendOsc } from '../../services/oscService';
import { transformTabs } from './utils/tabs';
import saveBtn from '../../assets/save.png';
import minusBtn from '../../assets/minus.png';
import plusBtn from '../../assets/plus.png';

const initialLines = [...Array(5)].map(() => ({ value: '', tabs: 0 }));

export const MainPage = () => {
  const [lines, setLines] = useState(initialLines);
  const [author, setAuthor] = useState('');

  const [isThanks, setIsThanks] = useState(false);

  const updateLineValue = useCallback((idx: number, val: string) => {
    const value = val.toUpperCase().trimStart();
    setLines((prev) =>
      prev.map((line, i) => (i === idx ? { tabs: transformTabs(value.length, line.tabs), value } : line)),
    );
  }, []);

  const updateLineTabs = useCallback((idx: number, value: number) => {
    setLines((prev) =>
      prev.map((line, i) => {
        return { ...line, tabs: i === idx ? transformTabs(prev[idx].value.length, value) : line.tabs };
      }),
    );
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = lines
      .filter((l) => l.value.length > 0)
      .map((line, i) => {
        return [...Array(lines[i].tabs)].map(() => '    ').join('') + line.value;
      })
      .join('\n');
    if (author.length < 1 || text.length < 5) return;

    sendOsc('/gloMsgUser', [author]);
    console.log(text);
    sendOsc('/gloMsg1', [text]);
    setIsThanks(true);
    setLines(initialLines);
    setAuthor('');
  };

  useEffect(() => {
    if (!isThanks) return;
    const timeout = setTimeout(() => setIsThanks(false), 5000);
    return () => clearTimeout(timeout);
  }, [isThanks]);

  if (isThanks) return <Thanks>Dziekujemy</Thanks>;
  return (
    <MainPageWrapper>
      <PreviewLines>
        {lines.map((line, i) => (
          <PreviewLine key={i}>
            <TabConfigurator>
              <img src={minusBtn} alt="minus" width={30} onClick={() => updateLineTabs(i, line.tabs - 1)} />
              <div>{lines[i].tabs}</div>
              <img src={plusBtn} alt="plus" width={30} onClick={() => updateLineTabs(i, line.tabs + 1)} />
            </TabConfigurator>
            <Input
              key={i}
              value={line.value}
              tabs={line.tabs}
              onChange={(e) => updateLineValue(i, e.target.value)}
              maxLength={11}
            />
          </PreviewLine>
        ))}
      </PreviewLines>
      <div style={{ width: 300 }}>
        <Input author value={author} onChange={(e) => setAuthor(e.target.value.toUpperCase())} maxLength={15} />
      </div>
      <img onClick={handleSubmit} width="270px" src={saveBtn} alt="save" />
    </MainPageWrapper>
  );
};
