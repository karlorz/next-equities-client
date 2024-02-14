import { auth } from 'auth';
import Link from 'next/link';

import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
// import { UserDropdown } from '@/components/navbar/user-dropdown';
import UserButton from '@/components/user-button';

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          next-starter
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? <UserButton /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
};
