'use client';

import { ChangeEvent } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';

import { Input } from '@/components/atoms/Input';

export const Search = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchTerm = searchParams.get('search');

  const handleChange = useDebounceCallback(
    ($event: ChangeEvent<HTMLInputElement>) => {
      const searchTerm = $event.target.value;
      const params = new URLSearchParams(searchParams);

      if (!searchTerm) {
        params.delete('search');
      } else {
        params.set('search', searchTerm);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    350,
    {
      maxWait: 1000,
    },
  );

  return (
    <div className="relative w-full">
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        defaultValue={searchTerm!}
      />
    </div>
  );
};
