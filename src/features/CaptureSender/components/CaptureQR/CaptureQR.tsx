import { QRCodeSVG } from 'qrcode.react';
import { FC } from 'react';
import { Flex } from '../../../../components/Flex/Flex';
import backBtnImg from '../../../../assets/layout/backBtn.png';
import sendBtnImg from '../../../../assets/layout/sendBtn.png';
import { BottomButtons } from '../../../../components/BottomButtons/BottomButtons';
import { Header } from '../../../../components/Header/Header';

interface ICaptureQRProps {
  captureFilename: string;
  onCancel: () => void;
}

export const CaptureQR: FC<ICaptureQRProps> = ({ captureFilename, onCancel }) => {
  return (
    <Flex gap={100} alignItems="center">
      <Flex gap={55} alignItems="center">
        <Header>QR</Header>
        <Header>ZESKANUJ KOD TELEFONEM</Header>
      </Flex>
      <QRCodeSVG
        value={`https://qr.picsane.tech/testsso/${captureFilename}`}
        size={400}
        bgColor="transparent"
        fgColor="#00339F"
      />
      <BottomButtons>
        <img src={backBtnImg} alt="back" onClick={onCancel} />
        <img src={sendBtnImg} alt="send" />
      </BottomButtons>
    </Flex>
  );
};
