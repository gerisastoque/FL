interface dataNavegador {
	logo: string;
	home: string;
	profile: string;
}

import FL from '../assets/F&L.png';
import homeIcon from '../assets/home.png';
import profileIcon from '../assets/profileImg.png';

const dataNavegador: dataNavegador[] = [
	{
		logo: FL,
		home: homeIcon,
		profile: profileIcon,
	},
];

export default dataNavegador;
