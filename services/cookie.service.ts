import { COOKIE_KEYS_ENUM } from '@/enum/cookies-key.enum';
import Cookies from 'js-cookie';

export const setClientCookie = (
  name: COOKIE_KEYS_ENUM,
  value: string,
  options?: Cookies.CookieAttributes
): void => {
  Cookies.set(name, value, options);
};

export const getClientCookie = (name: COOKIE_KEYS_ENUM): string | undefined => {
  return Cookies.get(name);
};

export const removeClientCookie = (
  name: string,
  options?: Cookies.CookieAttributes
): void => {
  Cookies.remove(name, options);
};
