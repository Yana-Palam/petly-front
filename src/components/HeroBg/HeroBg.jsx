import React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';

// import { device } from 'utils/device';
import {
  HeroWrap,
  ImgStyled,
  ImgLayerOne,
  ImgLayerTwo,
  ImgLayerThree,
  //   ImgLayerFour,
} from './HeroBg.styled';

// import mob_bg from '../../assets/hero/mob/mob_bg.svg';
// import tab_bg from '../../assets/hero/tab/Vector.svg';
import mob_lady from '../../assets/hero/mob/mob_1x.webp';
import tab_lady from '../../assets/hero/tab/tab_1x.webp';
import desk_lady from '../../assets/hero/desk/desc_1x.webp';
import layerOne from '../../assets/hero/desk/1layer.svg';
import layerTwo from '../../assets/hero/desk/2layer.svg';
import layerThree from '../../assets/hero/desk/3layer.svg';
// import layerFour from '../../assets/hero/desk/layer4.svg';

function HeroBg() {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <HeroWrap>
        {isDesktop && (
          <div>
            <ImgLayerOne src={layerOne} alt="background layers" />
            <ImgLayerTwo src={layerTwo} alt="background layers" />
            <ImgLayerThree src={layerThree} alt="background layers" />
            {/* <ImgLayerFour src={layerFour} alt="background layers" /> */}
          </div>
        )}
      </HeroWrap>
      {isMobile && <ImgStyled src={mob_lady} alt="lady with a dog" />}
      {isTablet && <ImgStyled src={tab_lady} alt="lady with a dog" />}
      {isDesktop && <ImgStyled src={desk_lady} alt="lady with a dog" />}
    </>
  );
}
export default HeroBg;
