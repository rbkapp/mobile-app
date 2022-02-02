import React, { createContext, useState } from 'react';

import { IUserProps } from '../../types';
interface AuthContextData {
  signed: boolean;
  token: string;
  user: IUserProps | null;
  signIn(user_data: IUserProps, token:string): Promise<void>;
  signOut(): void;
  temp: string;
  setTemp( temp_Data: any ): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<IUserProps | null>(null);
	const [token, setToken] = useState<string>('');
	const [temp, changeTemp] = useState<string>('');

	async function signIn(user_data: IUserProps, token:string) {
		setToken(token);
		setUser({
			id: user_data.id,
			name: user_data.name,
			email: user_data.email,
			type_document: user_data.type_document,
			document: user_data.document,
			birthdate: user_data.birthdate,
			gender: user_data.gender,
			cell_phone: user_data.cell_phone,
			avatar: user_data.avatar,
			verify_token: user_data.verify_token,
			organizer: user_data.organizer,
		});
	}

	function signOut() {
		setToken('');
		setUser(null);
	}

	async function setTemp(temp_Data: any) {
		changeTemp(temp_Data);
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, token, user, signIn, signOut, temp, setTemp }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
