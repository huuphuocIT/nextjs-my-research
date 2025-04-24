import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export default createEnv({
  server: {
    LOCALE_COOKIE: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    LOCALE_COOKIE: process.env.LOCALE_COOKIE,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
