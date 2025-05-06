import { PropsWithChildren } from 'react';

import { DefaultTemplate } from '@/components/templates/DefaultTemplate';

type Props = PropsWithChildren<object>;

export default function DashboardLayout(props: Props) {
  const { children } = props;

  return <DefaultTemplate>{children}</DefaultTemplate>;
}
