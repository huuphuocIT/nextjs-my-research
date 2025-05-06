'use client';

import { useOrganizationList } from '@clerk/nextjs';

import { Item } from './Item';

export const MemberList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const organizations = userMemberships?.data ?? [];

  if (!organizations.length) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {organizations
        .map((member) => member.organization)
        .map((org) => (
          <Item
            key={org.id}
            id={org.id}
            name={org.name}
            imageUrl={org.imageUrl}
          />
        ))}
    </ul>
  );
};
