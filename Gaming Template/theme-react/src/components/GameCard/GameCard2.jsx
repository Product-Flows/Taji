import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GameCard({ name, banner, slug, state }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageBlur, setImageBlur] = useState(true); // New state variable for blur effect

    const handleImageLoad = () => {
        setImageLoaded(true);
        setTimeout(() => setImageBlur(false), 800);
    };
    const[url,icon,title] = state;
    console.log();

    return (
        <div className={`bg-[#ffff] dark:bg-gray-800 rounded-[10px] overflow-hidden mt-3 shadow-xl cursor-pointer`}>
            <Link to={`/game/${slug
                ?.toLowerCase()
                ?.replace(/[^a-z0-9\s-]/g, '')
                ?.replace(/\s+/g, '-')} `}            >
                <div className="overflow-hidden w-full">
                    {!imageLoaded && (
                        <div
                            className="bg-gray-300 w-full h-[110px] sm:h-[123px] md:h-[153px] lg:h-[100px] xl:h-[128px] 2xl:h-[158px] animate-wave-skeleton"
                        ></div>
                    )}
                    <img
                        src={banner}
                        alt={name}
                        className={`w-full h-full object-cover  rounded-e-2xl-2xl ${!imageLoaded ? 'blur hidden' : 'transition ease-out blur-none duration-700'}`}
                        style={imageBlur ? { filter: 'blur(20px)' } : {}}
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="p-2">
                    <p className="text-[10px] md:text-sm leading-none font-bold text-center truncate dark:text-white">
                        {name}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default GameCard;