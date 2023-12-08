import ImageOne from 'assets/image/image1.png';

const BlogComponent = () => {
    return (
        <div className="w-full box-border py-10 lg:px-16 lg:py-20">
            <div className="max-w-5xl mx-auto pt-16 ">
                <div className="flex justify-between items-center">
                    <div className="w-1/2">
                        <img src={ImageOne} alt="blog image" className='rounded-3xl shadow-2xl   shadow-slate-500' />
                    </div>
                    <div className="w-1/2 ml-10">
                        <span className="bg-yellow-400  px-5 py-1 items-center rounded-full font-medium">Most recent</span>
                        <p className='text-gray-500 pt-5'>12 Dec, 23</p>
                        <p className='text-3xl font-sans font-semibold pt-2'>Introducing Gemini: our largest and most capable AI model</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogComponent;