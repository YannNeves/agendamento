import React, { InputHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean | string | undefined;
  width?: number | string | undefined;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface UserProps {
  name: string;
  email?: string;
  speciality?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthContextProps {
  signed: boolean;
  loading: boolean;
  user: UserProps | string;
  setLoading: (loading: boolean) => void;
  signIn: (credentials: LoginCredentials) => Promise<void>;
  signOut: () => {};
  register: (credentials: RegisterCredentials) => Promise<void>;
}

export interface RouteParams {
  id: string | number | null;
}
