'use client';
import { Button } from '@heroui/react';
import { useAuth } from '@/_hooks/useAuth';

const Header = () => {
  const { isUserSignedIn, login, logout } = useAuth();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Resume Builder 123</h1>
      {!isUserSignedIn && (
        <Button color="primary" onPress={login}>
          Login
        </Button>
      )}
      {isUserSignedIn && (
        <Button color="primary" onPress={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Header;
