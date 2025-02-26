import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GameCard from '../../components/GameCard/GameCard';
import AdCMP from '../../components/ADS/AdCMP';
import Image_slider from '../../components/ImageSlider/Image_slider';

function GamesPreview() {
    const { name } = useParams();
    const [state, setState] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [OnPreview, setOnPreview] = useState(false);

    const slugify = (text) => text?.toLowerCase()?.replace(/[^a-z0-9\s-]/g, "")?.replace(/\s+/g, "-");
    const getGameListFunc = async () => {
        const api_res = await axios.get("https://pub.gamezop.com/v3/games?id=9632&lang=en");
        const games = api_res?.data?.games || [];
        setGamesList(games)
        
        // const New_Data = api_res?.data?.games?.filter(
        //     (item) => item?.name?.en?.toLowerCase().replace(/\s+/g, "-") === name
        // );

        const New_Data = games.filter((item) => slugify(item?.name?.en) === name); setState(New_Data[0] || null);
    };
    const getGameListFunc2 = async () => {
        const api_res = await axios.get("https://tajigames.com/api/api.php?type=gameList");
        const games = api_res?.data?.games || [];
        setGamesList(games)
        const New_Data = games.filter((item) => slugify(item?.name?.en) === name); setState(New_Data[0] || null);

    };

    useEffect(() => {
        getGameListFunc();
        getGameListFunc2();
        setOnPreview(false)
    }, [name]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [state]);

    function formatNumber(num) {
        if (num >= 1e9) {
            return (num / 1e9).toFixed(2) + "B"; // Billion
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(2) + "M"; // Million
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(2) + "K"; // Thousand
        }
        return num.toString(); // Less than a thousand, return as is
    }


    return (
        <div className='p-4 sm:ml-56'>
            {
                state?.url &&

                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#F4F4F4" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="apple-mobile-web-app-title" content="TheGameZone.fun" />
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui, shrink-to-fit=no viewport-fit=cover" />
                    <title>{state?.name?.en} - Play Online for Free! | TheGameZone</title>
                    <meta name="title" content={`${state?.name?.en} - Play Online for Free! | TheGameZone`} />
                    <meta name="description" content={`Play ${state?.name?.en} on the most popular website for free online games! TheGameZone works on your mobile, tablet, or computer. No downloads, no login. Play now!`} />
                    <meta name="keywords" content={`${state?.name?.en} - Play Online for Free! | TheGameZone`} />
                    <meta property="og:title" content={`${state?.name?.en} - Play Online for Free! | TheGameZone`} />
                    <meta property="og:description" content={`Play ${state?.name?.en} on the most popular website for free online games! TheGameZone works on your mobile, tablet, or computer. No downloads, no login. Play now!`} />
                    <meta property="og:url" content="https://thegamezone.fun/" />
                    <meta property="og:site_name" content="TheGameZone" />
                    <meta property="og:image" content="https://thegamezone.fun/assets/images/logo.png" />
                    <meta property="og:image" content="https://thegamezone.fun/assets/images/logo.png" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={`${state?.name?.en} - Play Online for Free! | TheGameZone`} />
                    <meta name="twitter:description" content={`Play ${state?.name?.en} on the most popular website for free online games! TheGameZone works on your mobile, tablet, or computer. No downloads, no login. Play now!`} />
                    <meta name="twitter:image" content="https://thegamezone.fun/assets/images/logo.png" />
                    <link rel="canonical" href="https://thegamezone.fun/"></link>
                </Helmet>
            }

            <div className="relative flex flex-col lg:flex-row mt-14">
                <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
                    {/* Game Preview Section */}
                    <div className="flex-1 w-full">
                        <div className="w-full">
                            <div className="h-[500px] sm:h-[500px] lg:h-[80vh] max-h-[730px]">
                                {
                                    OnPreview ? <>
                                        <iframe
                                            src={state?.url}
                                            width="100%"
                                            height="100%"
                                        />
                                    </> :
                                        <>
                                            <div className="h-full bg-black rounded-xl relative">
                                                <div className="h-full opacity-40">
                                                    <img
                                                        src={state?.assets?.wall}
                                                        className="w-full h-full rounded-xl object-cover"
                                                        alt={state?.name?.en}
                                                    />
                                                </div>
                                                <div className="w-full h-full text-white flex flex-col justify-center items-center absolute top-0 left-0 z-[2]">
                                                    <div className="text-center">
                                                        {/* Image */}
                                                        <div className="h-64 mb-4 hidden  md:block">
                                                            <div className="relative w-full h-full aspect-w-1 aspect-h-1">
                                                                <img
                                                                    src={state?.assets?.square}
                                                                    className="w-full h-full shadow-2xl border-4 border-white rounded-3xl object-cover"
                                                                    alt={state?.name?.en}
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* Text and Play Button */}
                                                        <div className="my-6 font-bold text-xl sm:text-3xl">{state?.name?.en}</div>
                                                        <div
                                                            className="w-[200px] bg-[#5AC4D1] rounded-full flex cursor-pointer mx-auto justify-center gap-2 py-4"
                                                            // onClick={() => window.open(state?.url)}
                                                            onClick={() => setOnPreview(true)}
                                                        >
                                                            <b className="text-[#ffff] text-lg sm:text-xl">PLAY GAME</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                    {/* Rest of the Content */}

                     <div className="lg:w-[300px] w-full lg:ml-4 dark:bg-gray-800 bg-gray-50 p-6 rounded-xl text-black dark:text-white max-h-[730px]">
                        <h2 className="text-xl font-bold mb-4">About Taji Games
                        </h2>

                        {state?.name?.en && (
                            <p className='flex gap-2'>
                                <b>Name:</b>
                                <img src={state?.assets?.coverTiny} className="w-[30px] shadow-2xl rounded-3xl object-cover" alt={state?.name?.en} /><span className="text-gray-600 dark:text-gray-300 font-bold">{state?.name?.en}</span>
                            </p>
                        )}

                        {state?.description?.en && (
                            <p>
                                <b>Description:</b> {state?.description?.en}
                            </p>
                        )}

                        {state?.gamePlays > 0 && (
                            <p>
                                <b>Game Plays:</b> <span>{formatNumber(state?.gamePlays)}</span>
                            </p>
                        )}


                        {state?.categories?.en?.length > 0 && (
                            <p>
                                <b>Categories:</b> {state?.categories?.en?.join(", ")}
                            </p>
                        )}


                        {state?.tags?.en?.length > 0 && (
                            <div className="mb-4 flex items-start gap-2">
                                <b className='mt-2'>Tags:</b>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {state?.tags?.en?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {state?.isPortrait !== undefined && (
                            <p>
                                <b>Is Portrait:</b> {state?.isPortrait ? "Yes" : "No"}
                            </p>
                        )}

                        <div className="mt-5">
                            {/* Gameplay Preview */}
                            {state?.gamePreviews?.en && (
                                <iframe
                                    src={state?.gamePreviews?.en.replace("youtu.be/", "www.youtube.com/embed/")}
                                    title={`${state?.name?.en} Preview`}
                                    className="w-full rounded-lg"
                                    height="300px"
                                ></iframe>
                            )}
                        </div>
                    </div> 

                    <div className='w-[300px] '>
                        <AdCMP adSize={`300x700`} dataAdSlot="" />
                    </div>
                </div>
            </div>

            <Image_slider screens={state?.assets?.screens} main={false} />

            {/* Bottom Horizontal Ad */}
            <div className="rounded-lg w-full h-fit text-center items-center mt-5">
                <div className='hidden xl:block'>
                    <AdCMP adSize='1200x280' dataAdSlot="" />
                </div>

                <div className='hidden lg:block xl:hidden'>
                    <AdCMP adSize='1000x280' dataAdSlot="" />
                </div>

                <div className='hidden md:block lg:hidden'>
                    <AdCMP adSize='744x280' dataAdSlot="" />
                </div>

                <div className='block md:hidden'>
                    <AdCMP adSize={`300x250`} dataAdSlot="" />
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-black dark:text-white font-bold text-[24px]'>New Games</h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-4 mt-2">
                    {gamesList && gamesList?.slice(30, 80)?.map((_ele, i) => {
                        const GetSlug = _ele?.name?.en?.toLowerCase().replace(/\s+/g, "-");
                        return (<>
                            <GameCard key={i} id={i} slug={GetSlug} name={_ele?.name?.en} banner={_ele?.assets?.square} link={_ele?.URL} />
                        </>
                        )
                    }

                    )}
                    {gamesList.length === 0 && <div className="col-span-12 lg:col-span-12 rounded-lg bg-white w-full h-40 flex justify-center items-center my-4">
                        <h2 className='text-[28px] font-bold'>
                            No games found.
                        </h2>
                    </div>
                    }
                </div>
            </div>

            <div className="rounded-lg w-full h-fit text-center items-center mt-5">
                <div className='hidden xl:block'>
                    <AdCMP adSize='1200x280' dataAdSlot="" />
                </div>

                <div className='hidden lg:block xl:hidden'>
                    <AdCMP adSize='1000x280' dataAdSlot="" />
                </div>

                <div className='hidden md:block lg:hidden'>
                    <AdCMP adSize='744x280' dataAdSlot="" />
                </div>

                <div className='block md:hidden'>
                    <AdCMP adSize={`300x250`} dataAdSlot="" />
                </div>
            </div>

        </div>
    );
}

export default GamesPreview;
