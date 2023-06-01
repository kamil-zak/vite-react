import IosShareBtn from '../../assets/ios-share-btn.jpg';
import AndroidOptionsBtn from '../../assets/android-options-btn.jpg';
import iOsAddToHomeBtn from '../../assets/ios-add-to-home-btn.jpg';
import AndroidAddToHomeBtn from '../../assets/android-add-to-home-btn.jpg';
import { InstalGuideItem, InstalGuideText, InstalGuideWrapper } from './instal-guide.styles';
import { isAndroid, isIOS } from '../../utils/detectors.util';

export const InstalGuide = () => {
  if (!isAndroid() && !isIOS())
    return (
      <InstalGuideWrapper>
        <InstalGuideText large>You have to install PWA before use this app.</InstalGuideText>
      </InstalGuideWrapper>
    );

  const startImage = isAndroid() ? AndroidOptionsBtn : IosShareBtn;
  const addToHomeImage = isAndroid() ? AndroidAddToHomeBtn : iOsAddToHomeBtn;
  return (
    <InstalGuideWrapper>
      <InstalGuideText large>App instal guide</InstalGuideText>
      <InstalGuideItem>
        <InstalGuideText>{isAndroid() ? '1. Click options button' : '1. Click share btn'}</InstalGuideText>
        <img width="300" src={startImage} alt="share guide" />
      </InstalGuideItem>
      <InstalGuideItem>
        <InstalGuideText>2. Click "Add to home screen"</InstalGuideText>
        <img width="300" src={addToHomeImage} alt="add to home screen guide" />
      </InstalGuideItem>
      <InstalGuideItem>
        <InstalGuideText>3. Confirm action</InstalGuideText>
      </InstalGuideItem>
      <InstalGuideItem>
        <InstalGuideText>4. You are ready to use app!</InstalGuideText>
      </InstalGuideItem>
    </InstalGuideWrapper>
  );
};
