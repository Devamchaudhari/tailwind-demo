import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { IScrollTopLink } from 'shared/interface/state';

const ScrollToTopLink = ({ to, children }: IScrollTopLink) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link to={to} onClick={handleClick} className="text-blue-500 hover:text-blue-700" >
            {children}
        </Link>
    );
};

export default ScrollToTopLink;