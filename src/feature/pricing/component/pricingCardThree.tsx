import { Link } from "react-router-dom";
import { GreenTick } from "shared/component/icons/icon";

const PricingCardThree = () => {
    return (
        <div className="max-w-xs border-2 border-gray-200 rounded-xl p-4 flex flex-col items-center shadow-2xl  lg:max-w-sm md:max-w-xs flex-grow m-5">
            <h3 className="mb-4 text-3xl font-semibold text-center text-slate-800">Enterprise</h3>
            <p className="font-normal text-gray-500 sm:text-lg dark:text-gray-500 text-center">Best for large scale uses and extended redistribution rights.</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$29</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Team size: <span className="font-semibold">100+ developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Premium support: <span className="font-semibold">36 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Free updates: <span className="font-semibold">36 months</span></span>
                </li>
            </ul>
            <Link to="#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-sans w-60 lg:w-80 text-center md:w-60'>Get started</Link>
        </div>
    );
};

export default PricingCardThree;