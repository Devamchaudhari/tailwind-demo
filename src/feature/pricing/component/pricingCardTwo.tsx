import { Link } from "react-router-dom";
import { GreenTick } from "shared/component/icons/icon";

const PricingCardTwo = () => {
    return (
        <div className="max-w-xs border-4 border-slate-800 rounded-xl p-4 flex flex-col items-center shadow-2xl relative md:max-w-xs lg:max-w-sm flex-grow m-5">
            <span className="bg-yellow-400 absolute p-2 rounded-full top-[-20px] font-medium">Shop Vista recommends</span>
            <h3 className="mb-4 text-3xl font-semibold text-center text-slate-800 mt-5">Company</h3>
            <p className="font-normal text-gray-500 sm:text-lg dark:text-gray-500 text-center">Relevant for multiple users, extended & premium support.</p>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$99</span>
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
                    <span>Team size: <span className="font-semibold">10 developer</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                </li>
                <li className="flex items-center space-x-3">
                    <GreenTick className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                </li>
            </ul>
            <Link to="#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-sans w-60 lg:w-80 text-center sm:w-60'>Get started</Link>
        </div>
    );
};

export default PricingCardTwo;