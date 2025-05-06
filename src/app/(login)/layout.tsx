import { PropsWithChildren } from 'react';

import { LoginTemplate } from '@/components/templates/LoginTemplate';

type Props = PropsWithChildren<object>;

export default function LoginLayout(props: Props) {
  const { children } = props;

  return <LoginTemplate>{children}</LoginTemplate>;
}
