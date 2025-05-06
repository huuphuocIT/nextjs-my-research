import { PropsWithChildren } from 'react';

import { BoardTemplate } from '@/components/templates/BoardTemplate';

import { AuthenticatedWrapper } from './_components/AuthenticatedWrapper';

type Props = PropsWithChildren<object>;

export default function AuthenticatedLayout(props: Props) {
  const { children } = props;

  return (
    <AuthenticatedWrapper>
      <BoardTemplate>{children}</BoardTemplate>
    </AuthenticatedWrapper>
  );
}
