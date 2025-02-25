import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GameCard from '../../components/GameCard/GameCard';
import AdCMP from '../../components/ADS/AdCMP';
import Image_slider from '../../components/ImageSlider/Image_slider';

function BlogPreview() {
    const { name } = useParams();
    const [state, setState] = useState([]);
    const [gamesList, setGamesList] = useState([]);

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

    useEffect(() => {
        getGameListFunc();
    }, [name]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [state]);


    useEffect(() => {
        try {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({});
        } catch (e) {
            console.error("Adsbygoogle failed to load:", e);
        }
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

    useEffect(() => {
        // Ensure the `window.yaContextCb` array is initialized
        if (!window.yaContextCb) {
            window.yaContextCb = [];
        }

        // Push the Yandex ad rendering script
        window.yaContextCb.push(() => {
            if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
                window.Ya.Context.AdvManager.render({
                    blockId: "R-A-13709192-1",
                    renderTo: "yandex_rtb_R-A-13709192-1",
                });
            }
        });
    }, []);


    return (
        <div className='p-4 sm:ml-56'>
            {
                state?.url &&

                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#F4F4F4" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="apple-mobile-web-app-title" content="TheGameZone Blog" />
                    <meta name="HandheldFriendly" content="true" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui, shrink-to-fit=no viewport-fit=cover" />

                    {/* Dynamic Blog Title */}
                    <title>{state?.name?.en} - TheGameZone Blog</title>
                    <meta name="title" content={`${state?.name?.en} - TheGameZone Blog`} />

                    {/* Dynamic Blog Description */}
                    <meta name="description" content={`Read about ${state?.name?.en} on TheGameZone Blog. Stay updated with the latest insights, tips, and stories.`} />

                    {/* Dynamic Blog Keywords */}
                    <meta name="keywords" content={`${state?.blog?.tags?.join(", ") || "TheGameZone, Blog, Online Games, News"}`} />

                    {/* Open Graph Metadata */}
                    <meta property="og:title" content={`${state?.name?.en} - TheGameZone Blog`} />
                    <meta property="og:description" content={`Explore ${state?.name?.en} on TheGameZone Blog.`} />
                    <meta property="og:url" content={`https://thegamezone.fun/blog/${state?.blog?.slug}`} />
                    <meta property="og:site_name" content="TheGameZone Blog" />
                    <meta property="og:image" content={state?.blog?.image || "https://thegamezone.fun/assets/images/default-blog-image.png"} />
                    <meta property="og:type" content="article" />

                    {/* Twitter Metadata */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={`${state?.name?.en} - TheGameZone Blog`} />
                    <meta name="twitter:description" content={`Learn about ${state?.name?.en} on TheGameZone Blog.`} />
                    <meta name="twitter:image" content={state?.blog?.image || "https://thegamezone.fun/assets/images/default-blog-image.png"} />

                    {/* Canonical URL */}
                    <link rel="canonical" href={`https://thegamezone.fun/blog/${state?.blog?.slug}`} />
                </Helmet>

            }

            <div className="p-6 lg:p-12min-h-screen">
                {/* Hero Banner */}
                <div
                    className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-lg p-8 lg:p-8 shadow-xl"
                    style={{ overflow: "hidden" }}
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-6">{state?.name?.en}</h1>
                    <p className="text-center text-lg lg:text-xl">{state?.description?.en}</p>
                    <div
                        className="absolute inset-0 opacity-20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${state?.assets?.thumb})` }}
                    ></div>
                </div>

                {/* Game Image with Effects */}
                <div className="flex justify-center my-8">
                    <iframe
                        src={state?.url}
                        alt={state?.name?.en}
                        className="rounded-lg w-full lg:h-[600px] h-[400px] object-cover border-4 border-purple-700 shadow-2xl transition-transform transform"
                    />
                </div>

                {/* Tags and Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {state?.tags?.en.map((tag, index) => (
                        <Link to={`/tag/${tag?.toLowerCase()?.replace(/ /g, '-')}`}>
                            <span
                                key={index}
                                className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md"
                            >
                                {tag}
                            </span>
                        </Link>
                    ))}
                </div>

                <Image_slider screens={state?.assets?.screens} />

                {/* Stats Section */}
                <div className="flex justify-around bg-white p-6 rounded-lg shadow-lg mb-8">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">⭐ {state?.rating}</p>
                        <p className="text-sm text-gray-500">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">{state?.gamePlays}</p>
                        <p className="text-sm text-gray-500">Plays</p>
                    </div>
                </div>

                {/* Gameplay Preview */}
                {state?.gamePreviews?.en && (
                    <div className="my-8 bg-gray-100 p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Gameplay Preview</h2>
                        <iframe
                            src={state?.gamePreviews?.en.replace("youtu.be/", "www.youtube.com/embed/")}
                            title={`${state?.name?.en} Preview`}
                            className="w-full h-96 rounded-lg"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}


                {/* Additional Blog Details */}
                <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                        Why You Should Play {state?.name?.en}
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {state?.name?.en} brings you an unforgettable gaming experience with its captivating challenges and dynamic gameplay. Dive into this adventure and conquer the high score!
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Dive into the thrilling adventure of {state?.name?.en}. With stunning graphics, engaging gameplay, and endless fun, this game is perfect for gamers of all ages. Whether you're looking to kill time or test your skills, {state?.name?.en} offers an experience like no other.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            From its intuitive controls to its addictive challenges, this game is a must-try for anyone seeking quality entertainment. So what are you waiting for? Click the button below and start playing now!
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4 mt-6">
                        {state?.categories?.en.map((category, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                <div id="yandex_rtb_R-A-13709192-1" className='mt-5' />

            </div>




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
                <h1 className='text-black dark:text-white font-bold text-[24px]'>Popular Games</h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-4 mt-2">
                    {gamesList && gamesList?.slice(50, 100)?.map((_ele, i) => {
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

export default BlogPreview;
