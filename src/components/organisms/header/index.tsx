import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';

import { Button } from '@/components/atoms/Button';

import { cn } from '@/libs/utils';

type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { className } = props;

  const cnClassName = cn(
    'flex h-16 items-center justify-end gap-4 p-4',
    className,
  );

  return (
    <header className={cnClassName}>
      <SignedOut>
        <SignInButton>
          <Button variant="link">{'Sign In'}</Button>
        </SignInButton>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
