import { Link } from "react-router-dom";
import { ArrowIcon, CircleHover } from "shared/component/icons/icon";

const CompanyIntroComponent = () => {
    return (
        <div className='lg:w-full lg:px-16 bg-slate-800'>
            <div className="lg:max-w-7xl mx-auto w-full pt-20 lg:pt-20 lg:flex lg:flex-col sm:flex-col flex-col sm:px-20 lg:px-0 px-14 sm:pt-15 relative lg:pb-20">
                <p className="text-2xl font-sans font-bold tracking-tight text-white sm:text-3xl lg:text-5xl lg:leading-tight">" Shop Vista stands as a beacon of innovation in the realm of SaaS solutions for e-commerce. Our tailored suite of products redefines the way businesses thrive online, providing scalable, data-driven tools that amplify productivity, elevate customer engagement, and pave the path to sustained success in the digital marketplace."</p>

                <div className="relative pb-20">
                    <div className="mt-10 flex items-center lg:flex sm:flex lg:items-center bg-blue-400 w-36 lg:w-52 p-3 rounded hover:motion-safe:animate-draw hover:cursor-pointer">
                        <Link to="#" className="inline-flex text-1xl items-center font-medium text-white lg:text-2xl " >
                            Get Started
                            <CircleHover className="absolute w-[177px] lg:w-auto h-full pointer-events-none top-[-13px] left-[-15px] lg:top-4 lg:left-[-40px] sm:top-[-12px] sm:left-[-20px] " pathClassName="stroke-blue-500 stroke-[5px]" />
                        </Link>
                        <ArrowIcon className="w-4 h-4 ms-2 rtl:rotate-180 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyIntroComponent;