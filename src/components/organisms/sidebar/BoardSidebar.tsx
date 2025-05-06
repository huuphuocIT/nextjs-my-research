import Link from 'next/link';

import { Button } from '@/components/atoms/Button';
import { NewOrgButton, MemberList } from '@/components/organisms/OrgManagement';

export const BoardSidebar = () => {
  return (
    <aside className="fixed left-0 z-[1] flex h-full w-[60px] flex-col gap-y-4 bg-blue-200 p-3">
      <div className="flex-1">
        <MemberList />
        <NewOrgButton />
      </div>
      <Link href="/">
        <Button size="icon">{'<'}</Button>
      </Link>
    </aside>
  );
};
