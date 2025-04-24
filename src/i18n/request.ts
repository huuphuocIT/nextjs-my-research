'use server';

import { getUserLocale } from '@/libs/i18n';

import { getRequestConfig, RequestConfig } from 'next-intl/server';

export default getRequestConfig(async (): Promise<RequestConfig> => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
