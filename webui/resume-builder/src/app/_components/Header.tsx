'use client';
import { Button } from '@heroui/react';
import { useAuth } from '@/_hooks/useAuth';
import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  const { isUserSignedIn, login, logout } = useAuth();

  return (
    <header className="flex justify-between items-center p-4">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Templates</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
      <div className="text-2xl font-bold">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div>
        {!isUserSignedIn && (
          <Button color="primary" onPress={login}>
            Start Building
          </Button>
        )}
        {isUserSignedIn && (
          <Button color="primary" onPress={logout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
