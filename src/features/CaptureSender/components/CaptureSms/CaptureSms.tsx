import { FC } from 'react';
import { TouchInput } from '../../../../features/TouchKeyboard/components/TouchInput/TouchInput';
import { BottomButtons } from '../../../../components/BottomButtons/BottomButtons';
import backBtnImg from '../../../../assets/layout/backBtn.png';
import sendBtnImg from '../../../../assets/layout/sendBtn.png';
import { Flex } from '../../../../components/Flex/Flex';
import { Header } from '../../../../components/Header/Header';
import { TouchKeyboard } from '../../../../features/TouchKeyboard/components/TouchKeyboard/TouchKeyboard';
import { useTouchKeyboard } from '../../../../features/TouchKeyboard/hooks/useTouchKeyboard';
import { captureSmsSchema } from './captureSmsValidation';

interface ICaptureEmailProps {
  onCancel: () => void;
}

export const CaptureSms: FC<ICaptureEmailProps> = ({ onCancel }) => {
  const { register, keyboardProps, isValid } = useTouchKeyboard<'phone'>({ schema: captureSmsSchema });

  const handleSend = () => {
    if (!isValid) return;
    alert('send');
  };

  return (
    <>
      <Flex alignItems="center" gap={60}>
        <Header>SMS</Header>
        <div style={{ width: 780 }}>
          <Flex gap={20}>
            <Header>WPISZ NUMBER TELEFONU</Header>
            <TouchInput prefix="+48" {...register('phone')} />
            <TouchKeyboard phone {...keyboardProps} />
          </Flex>
        </div>
      </Flex>
      <BottomButtons>
        <img src={backBtnImg} alt="back" onClick={onCancel} />
        <img src={sendBtnImg} alt="back" onClick={handleSend} />
      </BottomButtons>
    </>
  );
};
