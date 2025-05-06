'use client';

import { UserButton, OrganizationSwitcher } from '@clerk/nextjs';

import { Search } from '@/components/molecules/search';

import { InviteButton } from '@/components/organisms/OrgManagement/InviteButton';

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <Search />
      </div>
      <div className="flex flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: 256,
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
      </div>
      <div className="flex gap-x-2 align-middle">
        <InviteButton />
        <UserButton />
      </div>
    </div>
  );
};
