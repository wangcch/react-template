import Home from "@/pages/Home";
import About from "@/pages/About";

const menuData = [
	{
		path: '/',
		component: Home,
		name: 'Home',
		exact: true
	}, {
		path: '/about',
		component: About,
		name: 'About',
		exact: true
	}
]

export const getMenuData = () => menuData;
