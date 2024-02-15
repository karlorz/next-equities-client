import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'next-equities',
  description: 'next-equities',
  keywords: ['next-equities', 'Next.js', 'React'],
  url: env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || '',
};
