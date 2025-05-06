'use client';

import { PropsWithChildren } from 'react';

import { AuthLoadingContent } from '@/components/molecules/auth/loading';

import { Authenticated, AuthLoading } from 'convex/react';

export const AuthenticatedWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthLoading>
        <AuthLoadingContent />
      </AuthLoading>

      <Authenticated>{children}</Authenticated>
    </>
  );
};
