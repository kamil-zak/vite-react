import { FC, useState } from 'react';
import { CaptureDeliveryHand, CaptureDeliveryWrapper } from './CaptureDelivery.styles';
import { CaptureEmail } from '../CaptureEmail/CaptureEmail';
import handImg from '../../../../assets/layout/hand.png';
import backBtnImg from '../../../../assets/layout/backBtn.png';
import emailImg from '../../../../assets/layout/email.png';
import smsImg from '../../../../assets/layout/sms.png';
import qrImg from '../../../../assets/layout/qr.png';
import { Flex } from '../../../../components/Flex/Flex';
import { CaptureQR } from '../CaptureQR/CaptureQR';
import { BottomButtons } from '../../../../components/BottomButtons/BottomButtons';
import { Header } from '../../../../components/Header/Header';
import { CaptureSms } from '../CaptureSms/CaptureSms';
interface ICaptureDeliveryProps {
  captureFilename: string;
  onReject: () => void;
}

export const CaptureDelivery: FC<ICaptureDeliveryProps> = ({ captureFilename, onReject }) => {
  const [option, setOption] = useState<'email' | 'sms' | 'qr' | null>(null);

  return (
    <CaptureDeliveryWrapper>
      <CaptureDeliveryHand src={handImg} alt="hand" />
      {option === 'email' && <CaptureEmail onCancel={() => setOption(null)} />}
      {option === 'sms' && <CaptureSms onCancel={() => setOption(null)} />}
      {option === 'qr' && <CaptureQR captureFilename={captureFilename} onCancel={() => setOption(null)} />}
      {option === null && (
        <Flex alignItems="center" gap={210}>
          <Flex alignItems="center">
            <Header>WYŚLIJ LINK DO ZDJĘCIA</Header>
            <Header>ZA POMOCA</Header>
          </Flex>
          <Flex direction="row" gap={30}>
            <img src={emailImg} alt="email" onClick={() => setOption('email')} />
            <img src={smsImg} alt="sms" onClick={() => setOption('sms')} />
            <img src={qrImg} alt="qr" onClick={() => setOption('qr')} />
          </Flex>
          <BottomButtons>
            <img src={backBtnImg} alt="back" onClick={onReject} />
          </BottomButtons>
        </Flex>
      )}
    </CaptureDeliveryWrapper>
  );
};
