'use client';

import Image from 'next/image';

import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { Hint } from '@/components/molecules';

import { cn } from '@/libs/utils';

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;

    setActive({
      organization: id,
    });
  };

  return (
    <li className="relative aspect-square">
      <Hint message={name} side="right" align="start" alignOffset={5}>
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={handleClick}
          className={cn(
            'cursor-pointer rounded-md opacity-60 transition hover:opacity-100',
            isActive && 'opacity-100',
          )}
        />
      </Hint>
    </li>
  );
};
