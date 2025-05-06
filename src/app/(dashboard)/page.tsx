import Link from 'next/link';

import { Button } from '@/components/atoms/Button';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default async function DashboardPage() {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <div>{'This is content Page'}</div>

      <div>
        <Link href="/board">
          <Button variant="default" size="default">
            {'Go to Board'}
          </Button>
        </Link>
      </div>
    </div>
  );
}
