import { FormEvent, useCallback, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { MainPageWrapper, PreviewLine, PreviewLines, TabConfigurator, TabConfiguratorButton } from './MainPage.styles';
import { sendOsc } from '../../services/oscService';
import { transformTabs } from './utils/tabs';

const initialLines = [...Array(5)].map(() => ({ value: '', tabs: 0 }));

export const MainPage = () => {
  const [lines, setLines] = useState(initialLines);
  const [author, setAuthor] = useState('');

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
    if (author.length < 3 || text.length < 10) return;

    sendOsc('/gloMsgUser', [author]);
    sendOsc('/gloMsg1', [text]);
    setLines(initialLines);
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <MainPageWrapper>
        <PreviewLines>
          {lines.map((line, i) => (
            <PreviewLine key={i}>
              <TabConfigurator>
                <TabConfiguratorButton tabIndex={-1} type="button" onClick={() => updateLineTabs(i, line.tabs - 1)}>
                  -
                </TabConfiguratorButton>
                <div>{lines[i].tabs}</div>
                <TabConfiguratorButton tabIndex={-1} type="button" onClick={() => updateLineTabs(i, line.tabs + 1)}>
                  +
                </TabConfiguratorButton>
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
          <div>&nbsp;&nbsp;Author</div>
          <Input
            placeholder="Name..."
            author
            value={author}
            onChange={(e) => setAuthor(e.target.value.toUpperCase())}
            maxLength={15}
          />
        </div>
        <Button>SAVE</Button>
      </MainPageWrapper>
    </form>
  );
};
