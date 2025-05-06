'use client';

import Link from 'next/link';
import Image from 'next/image';
import { OrganizationSwitcher } from '@clerk/nextjs';
import {
  LayoutDashboard as DashboardIcon,
  Star as FavoriteIcon,
} from 'lucide-react';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/atoms/Button';

const BASE_URL = '/board';

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorite = searchParams.get('favorite');

  return (
    <div className="hidden w-[206px] flex-col space-y-6 pt-5 pl-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.ico" alt="logo" width={30} height={30} />
          <span className="font-[family-name:var(--font-poppins)] text-2xl font-semibold">
            {'Board'}
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              padding: 6,
              width: '100%',
              borderRadius: 8,
              border: '1px solid #e5e7eb',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            },
          },
        }}
      />

      <div className="w-full space-y-1">
        <Button
          asChild
          size="lg"
          variant={favorite ? 'ghost' : 'secondary'}
          className="w-full justify-start px-2 font-normal"
        >
          <Link href={BASE_URL}>
            <DashboardIcon className="h-4 w-4" />
            {'Team Boards'}
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant={favorite ? 'secondary' : 'ghost'}
          className="w-full justify-start px-2 font-normal"
        >
          <Link
            href={{
              pathname: BASE_URL,
              query: { favorite: true },
            }}
          >
            <FavoriteIcon className="h-4 w-4" />
            {'Favorite Boards'}
          </Link>
        </Button>
      </div>
    </div>
  );
};
