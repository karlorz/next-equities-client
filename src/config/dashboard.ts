import { DashboardConfig } from 'types';

export const nextConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Watchlist',
      href: '/watchlist',
    },
    {
      title: 'Add',
      href: '/addstock',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
};

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],
};
