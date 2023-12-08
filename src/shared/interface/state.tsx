export interface IIconProps {
	className?: string;
	pathClassName?: string;
}

export interface IUserData {
	userDetails: ILoginData;
}
export interface ILoginData {
	email: string;
	id: number;
	name: string;
	token: string;
	user_type: string;
}

export interface IScrollTopLink {
	to: string;
	children: any;
}