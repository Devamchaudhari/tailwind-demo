import { ReactNode } from 'react';
import { TopHeader } from 'shared/component/navigation/topHeader';

interface IParentComponentProps {
	children: ReactNode;
}
const Layout: React.FC<IParentComponentProps> = (props) => {
	return (
		<div className='!scroll-smooth'>
			{<TopHeader />}
			{props.children}
		</div>
	);
};

export default Layout;
