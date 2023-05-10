import { FC } from 'react';
import agreementImg from '../../../../assets/layout/agreement.png';
import backBtnImg from '../../../../assets/layout/backBtn.png';
import agreeBtnImg from '../../../../assets/layout/agreeBtn.png';
import { CaptureAgreementButton } from './CaptureAgreement.styles';

interface ICaptureAgreementProps {
  onAccept: () => void;
  onReject: () => void;
}

export const CaptureAgreement: FC<ICaptureAgreementProps> = ({ onAccept, onReject }) => {
  return (
    <>
      <img src={agreementImg} alt="agreement" />
      <CaptureAgreementButton src={backBtnImg} alt="reject" onClick={onReject} />
      <CaptureAgreementButton src={agreeBtnImg} alt="accept" onClick={onAccept} right />
    </>
  );
};
