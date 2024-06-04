export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
	LOGIN = 'LOGIN',
	SIGNUP = 'SIGNUP',
	DASHBOARD = 'DASHBOARD',
	CREATEPOSTIMAGE = 'CREATEPOSTIMAGE',
	CREATEPOSTWEET = 'CREATEPOSTWEET',
	SETTINGS = 'SETTINGS',
	PASSWORD = 'PASSWORD',
}
export const get = <T>({ key, defaultValue }: { key: Screens; defaultValue: T }): T => {
	const value = localStorage.getItem(key) || sessionStorage.getItem(key);
	return value ? JSON.parse(value) : defaultValue;
};
export const set = ({ key, value, session = false }: { key: Screens; value: unknown; session?: boolean }) => {
	const storage = session ? sessionStorage : localStorage;
	const parsed = JSON.stringify(value);
	storage.setItem(key, parsed);
};

export default {
	get,
	set,
};
export type AppState = {
	screen: Screens;
};

export enum NavigationActions {
	'NAVIGATE' = 'NAVIGATE',
}

export interface NavigateAction {
	action: NavigationActions.NAVIGATE;
	payload: Screens;
}
export type Actions = NavigateAction;
