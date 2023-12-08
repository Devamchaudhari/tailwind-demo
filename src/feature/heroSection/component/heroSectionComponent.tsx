import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HERO_SECTION_IMAGE, SLIDER_SETTINGS } from 'shared/constant/constant';

const HeroSectionComponent = () => {
    return (
        <div className='lg:max-w-7xl mx-auto lg:px-16 lg:py-20 box-border py-10'>
            <div className="w-full lg:pt-20 lg:flex sm:px-20 lg:px-0 px-14 sm:pt-10 relative">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }} />
                </div>
                <div className="mx-auto pb-16 pt-16 lg:mx-0 lg:w-1/2 lg:flex-none lg:pb-24 lg:pr-4">
                    <p className="text-2xl font-sans font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl lg:leading-tight">Your Vision,
                        Our Templates,Limitless Possibilities..
                    </p>
                    <p className="mt-4 font-sans text-xs sm:text-xl lg:text-xl text-gray-500 lg:pt-5 pt-2">Transforming Your Ideas into Stunning Websites with Intuitive Tools and Limitless Possibilities.</p>
                    <div className='lg:flex mt-10 sm:flex sm:flex-col lg:flex-row flex flex-col'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-sans'>Get Started</button>
                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded lg:ml-10 lg:mt-0 font-sans sm:ml-0 sm:mt-5 mt-5'>Contact Us</button>
                    </div>
                </div>
                <div className='lg:w-1/2 mx-auto sm:w-full rounded'>
                    <Slider {...SLIDER_SETTINGS}>
                        {HERO_SECTION_IMAGE.map((images: { [key: string]: string; }, index: number) => {
                            const { url, alt } = images;
                            return (
                                <div key={index}>
                                    <img src={url} alt={alt} className='mx-auto  rounded' loading='lazy' />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div >
        </div >
    );
};

export default HeroSectionComponent;