import { FC } from 'react';
import { TouchInput } from '../../../../features/TouchKeyboard/components/TouchInput/TouchInput';
import { BottomButtons } from '../../../../components/BottomButtons/BottomButtons';
import backBtnImg from '../../../../assets/layout/backBtn.png';
import sendBtnImg from '../../../../assets/layout/sendBtn.png';
import { Flex } from '../../../../components/Flex/Flex';
import { Header } from '../../../../components/Header/Header';
import { useTouchKeyboard } from '../../../../features/TouchKeyboard/hooks/useTouchKeyboard';
import { TouchKeyboard } from '../../../../features/TouchKeyboard/components/TouchKeyboard/TouchKeyboard';
import { captureEmailSchema } from './captureEmailValidation';

interface ICaptureEmailProps {
  onCancel: () => void;
}

export const CaptureEmail: FC<ICaptureEmailProps> = ({ onCancel }) => {
  const { register, keyboardProps, isValid } = useTouchKeyboard<'email' | 'friend'>({
    schema: captureEmailSchema,
  });

  const handleSend = () => {
    if (!isValid) return;
    alert('send');
  };

  return (
    <>
      <Flex alignItems="center" gap={60}>
        <Header>EMAIL</Header>
        <div style={{ width: 750 }}>
          <Flex gap={20}>
            <Header>WPISZ TWÓJ ADRES EMAIL</Header>
            <TouchInput {...register('email')} />
            <Header style={{ marginTop: 20 }}>WYŚLIJ ZNAJOMYM</Header>
            <TouchInput {...register('friend')} />
            <TouchKeyboard {...keyboardProps} />
          </Flex>
        </div>
      </Flex>
      <BottomButtons>
        <img src={backBtnImg} alt="back" onClick={onCancel} />
        <img src={sendBtnImg} alt="send" onClick={handleSend} />
      </BottomButtons>
    </>
  );
};
