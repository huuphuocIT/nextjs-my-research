import { PropsWithChildren } from 'react';

export const LoginTemplate = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex h-screen w-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default LoginTemplate;
