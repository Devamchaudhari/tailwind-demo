import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PricingCardOne from "./pricingCardOne";
import PricingCardThree from "./pricingCardThree";
import PricingCardTwo from "./pricingCardTwo";
import PriceComparisonTable from "./priceComparionTable";
import { Transition } from "@headlessui/react";

const PricingComponent = () => {
    const [showPriceComparison, setShowPriceComparison] = useState(false);

    const afterShowPriceComparisonBtnStyle = 'bg-blue-500 text-white border hover:bg-transparent hover:border-blue-500 hover:border hover:text-blue-700';
    const beforeShowPriceComparisonBtnStyle = 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent';

    return (
        <div className="w-full box-border py-10 lg:px-16 lg:py-20">
            <div className="max-w-4xl mx-auto pt-16">
                <p className="font-sans text-slate-800 text-3xl font-bold text-center  lg:text-5xl">Everything you need to spend less</p>
                <p className="font-sans text-gray-400 text-xs font-semibold text-center mt-5 lg:text-xl">No matter where you are in your growth or the world, Ramp is designed to save you time and money.</p>
            </div>

            <div className="w-full flex mt-10 flex-wrap justify-center lg:justify-evenly lg:mt-20 sm:mt-16">
                <PricingCardOne />
                <PricingCardTwo />
                <PricingCardThree />
            </div>
            <div className="flex w-full justify-center mt-10 lg:mt-20 sm:mt-16">
                <button className={`${showPriceComparison ? afterShowPriceComparisonBtnStyle : beforeShowPriceComparisonBtnStyle} font-semibold  py-2 px-4  rounded lg:ml-10 lg:mt-0 font-sans sm:ml-0 sm:mt-5 mt-5 flex`} onClick={() => setShowPriceComparison(!showPriceComparison)}>Show Detailed Price Comparison <ArrowDownIcon className={`h-6 ml-5 transition duration-500 transform  ${showPriceComparison ? ' rotate-180' : 'rotate-[-180]'}`} /></button>
            </div>
            <Transition
                show={showPriceComparison}
                enter="transition ease-out duration-500"
                enterFrom="transform opacity-0 "
                enterTo="transform opacity-100"
                leave="transition ease-in duration-500"
                leaveFrom="transform opacity-100 "
                leaveTo="transform opacity-0"
            >
                {(ref) => (
                    <div ref={ref}>
                        {showPriceComparison && <PriceComparisonTable />}
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default PricingComponent;