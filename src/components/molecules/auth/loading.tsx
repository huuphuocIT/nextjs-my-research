import Image from 'next/image';

export const AuthLoadingContent = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Image src="/loading.svg" alt="loading" width={100} height={100} />
    </div>
  );
};
