// This module implements a locale selection page.
//
// This page accepts an optional target pathname as a query parameter. It
// displays a page that re/directs to the pathname in the selected locale.
import { default as LocaleSelectPageBase } from '@ircsignpost/signpost-base/dist/src/locale-select-page';
import type { Lang } from '@ircsignpost/signpost-base/dist/src/locale-select-page';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { SITE_TITLE } from '../lib/constants';
import logo from '../public/info-palante-logo.png';

const langs: Lang[] = [
  {
    langShort: 'es',
    langLong: 'Español',
  },
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (langs.length === 1) {
    // If there's only one language, redirect to the homepage in that language
    return {
      redirect: {
        destination: `/${langs[0].langShort}`,
        permanent: false,
      },
    };
  }
  return { props: {} };
};

/** The locale selection page.
 *
 * This page has two functionalities:
 * - Allow first time visitors to select their locale.
 * - Redirect recurring visitors to their selected locale.
 *
 * Before this page gets all data to make distinction between those two, it
 * renders a spinner.
 *
 * The page only shows the locale selection dialog to first time visitors.
 */
export default function LocaleSelectPage() {
  return (
    <LocaleSelectPageBase
      siteTitle={SITE_TITLE}
      message={"Bienvenidos a Info Pa'lante."}
      langs={langs}
      image={<Image src={logo} alt="icon" />}
    />
  );
}
