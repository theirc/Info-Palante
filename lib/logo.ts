import type { LogoProps } from '@ircsignpost/signpost-base/dist/src/header';
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import logoEnUs from '../public/info-palante-logo.png';

export const getHeaderLogoProps = (currentLocale: Locale): LogoProps => {
  let imgSrc: string;
  switch (currentLocale.url) {
    case 'es':
    default:
      imgSrc = logoEnUs.src;
      break;
  }
  return {
    src: imgSrc,
  };
};
