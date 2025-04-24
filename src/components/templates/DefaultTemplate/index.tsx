import { PropsWithChildren } from 'react';

import { Header } from '@/components/organisms/header';

export const DefaultTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>{children}</main>
      <footer>{'This is footer'}</footer>
    </div>
  );
};

export default DefaultTemplate;
