import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo.png'

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-opacity-80 z-20">
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-4">
                <Image
                    src={Logo}
                    alt="Shining Star"
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                />
            </div>
            <div className="flex space-x-5 my-8">
                <div className="h-4 w-4 rounded-full bg-yellow-500 animate-bounce"></div>
                <div className="h-4 w-4 rounded-full bg-red-500 animate-bounce2"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-500 animate-bounce"></div>
                <div className="h-4 w-4 rounded-full bg-red-500 animate-bounce2"></div>
            </div>
            <p className="text-2xl font-semibold text-gray-700">
                Loading...
            </p>
            <p className="text-[26px] lg:text-[36px] text-black font-bold">
                Shining Star
            </p>
            <p className="text-[24px] lg:text-[32px] text-black font-bold">
                Public School
            </p>
        </div>

    );
};

export default Loader;
