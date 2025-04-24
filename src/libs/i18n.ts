'use server';

import { cookies } from 'next/headers';

import env from '@/libs/env';
import { Locale, defaultLocale } from '@/i18n/config';

export async function getUserLocale() {
  return (await cookies()).get(env.LOCALE_COOKIE)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(env.LOCALE_COOKIE, locale, {
    sameSite: 'strict',
    secure: true,
  });
}
