import { PropsWithChildren } from 'react';

import { BoardSidebar, OrgSidebar } from '@/components/organisms/sidebar';
import { Navbar } from '@/components/organisms/navbar';

export const BoardTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <main className="h-full font-[family-name:var(--font-geist-sans)]">
      <BoardSidebar />
      <div className="h-full pl-[60px]">
        <div className="flex h-full gap-x-3">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoardTemplate;
