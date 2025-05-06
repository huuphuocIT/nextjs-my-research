'use client';

import { Plus as PlusIcon } from 'lucide-react';
import { OrganizationProfile, useOrganization } from '@clerk/nextjs';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import { Button } from '@/components/atoms/Button';

export const InviteButton = () => {
  const { organization } = useOrganization();

  if (!organization) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="aspect-square p-0">
          <PlusIcon className="text-black" />
          {'Invite members'}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[330px] border-none bg-transparent p-0 sm:max-w-[330px] md:max-w-[660px] min-[62rem]:max-w-[880px]">
        <OrganizationProfile
          appearance={{
            elements: {
              cardBox: {
                width: '100%',
                minWidth: 330,
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
