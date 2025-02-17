import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import {
  NEXT_PUBLIC_TENANT_DOMAIN,
  AZURE_AD_B2C_TENANT_NAME,
  AZURE_AD_B2C_PRIMARY_USER_FLOW,
} from '@/config';
import { signIn, signOut } from 'next-auth/react';
import { useCallback } from 'react';

export const useAuth = () => {
  const { data, status } = useSession();

  const isUserSignedIn = useMemo(() => {
    return status === 'authenticated';
  }, [status]);

  const login = useCallback(() => {
    signIn('azure-ad-b2c', { prompt: 'login', callbackUrl: '/redirect' });
  }, []);

  const logout = useCallback(() => {
    const postLogoutRedirectUri = window.location.origin;

    signOut({
      redirect: true,
      callbackUrl: `https://${NEXT_PUBLIC_TENANT_DOMAIN}/${AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/logout?post_logout_redirect_uri=${postLogoutRedirectUri}`,
    }).then(function () {
      window.location.href = `https://${NEXT_PUBLIC_TENANT_DOMAIN}/${AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/logout?post_logout_redirect_uri=${postLogoutRedirectUri}`;
    });
  }, []);

  return { data, status, isUserSignedIn, login, logout };
};
