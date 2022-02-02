/*import React, { createContext, useState } from 'react';

interface IUserProps {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  isAnonymous: boolean;
  tenantId: string;
  providerData: any;
}

interface AuthContextData {
  user: IUserProps | null;
  signIn(user_data: IUserProps): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<IUserProps | null>(null);

	async function signIn(user_data: IUserProps) {
		setUser(user_data);
	}

	return (
		<AuthContext.Provider value={{ user, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;*/


import React, { useState, createContext } from 'react';

interface IUserProps {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  isAnonymous: boolean;
  tenantId: string;
  providerData: any;
}

interface AuthContextData {
  user: IUserProps | null;
  signIn(user_data: IUserProps): Promise<void>;
}

export const AuthenticatedUserContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthenticatedUserProvider = ( children: any ) => {
  const [user, setUser] = useState(null);

  async function sigIn(temp_Data: any) {
		setUser(temp_Data);
	}

  return (
    <AuthenticatedUserContext.Provider value={{ user, sigIn }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};