import { cn } from '@/libs/utils';

type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return <header className={cn(className)}>{'Header Content'}</header>;
};

export default Header;
