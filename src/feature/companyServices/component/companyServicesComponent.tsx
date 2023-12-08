import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SERVICES_MAPPER, SLIDER_SERVICES_SETTINGS } from "shared/constant/constant";

const CompanyServicesComponent = () => {
    return (
        <div className="w-full mt-20">
            <div className="w-9/12 mx-auto">
                <p className="text-2xl lg:text-4xl sm:text-3xl text-slate-800 font-bold leading-loose tracking-tight text-center">Services we provided</p>
                <p className="text-2xl lg:text-2xl sm:text-2xl text-slate-500 font-semibold  leading-loose tracking-tight text-center mt-5 ">Empowering e-commerce through tailored SaaS solutions. Elevating businesses with data-driven innovation.</p>
                <div className='lg:w-full sm:w-full rounded mb-20 mt-10'>
                    <Slider {...SLIDER_SERVICES_SETTINGS} className="flex w-full outline-none mx-auto p-5">
                        {SERVICES_MAPPER.map((services: { [key: string]: string; }, index: number) => {
                            const { title, description } = services;
                            return (
                                <div key={index} className="flex lg:flex w-full mx-auto">
                                    <div className="flex mx-auto items-center  rounded-xl justify-evenly bg-slate-800 shadow-2xl">
                                        {/* <div className="w-fit">
                                            <img src={image} alt={title} />
                                        </div> */}
                                        <div className="p-10 ">
                                            <h3 className="text-4xl font-bold font-sans text-white">{title} :</h3>
                                            <p className="mt-10 text-2xl font-sans font-semibold text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CompanyServicesComponent;