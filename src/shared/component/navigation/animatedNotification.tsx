import Lottie from 'lottie-react';
import * as notificationIcon from '../../lottieFiles/notificationIcon.json';
const AnimatedNotification: React.FC = () => {
	const customStyle = {
		width: '40px', // Set your desired width
		height: '40px' // Set your desired height
	};
	return <Lottie animationData={notificationIcon} loop={true} style={customStyle} />;
};

export default AnimatedNotification;
