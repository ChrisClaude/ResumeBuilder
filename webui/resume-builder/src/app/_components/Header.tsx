"use client";
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@heroui/react';

const Header = () => {
  const login = () => {
    signIn('azure-ad-b2c');
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Resume Builder 123</h1>
      <Button color="primary" onPress={login}>
        Login
      </Button>
    </div>
  );
};

export default Header;
