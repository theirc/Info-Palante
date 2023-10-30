// A module for handling social media.
import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import emailImage from '../public/email.svg';
import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import whatsappImage from '../public/whatsapp.svg';
import whatsappChannelImage from '../public/whatsappchannel.svg';

export interface SocialMediaLink {
  title: string;
  href: string;
}

// Serializable social media links
export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  whatsappLink: SocialMediaLink;
  messengerLink: SocialMediaLink;
  whatsappChannelLink: SocialMediaLink;
  emailLink: SocialMediaLink;
}
/**
 * Provides data for Social Media buttons, e.g. Facebook, Whatsapp, etc.
 */
export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
    {
      ...socialMediaLinks.whatsappLink,
      image: whatsappImage,
    },
    {
      ...socialMediaLinks.whatsappChannelLink,
      image: whatsappChannelImage,
    },
    {
      ...socialMediaLinks.emailLink,
      image: emailImage,
    },
  ];
}
