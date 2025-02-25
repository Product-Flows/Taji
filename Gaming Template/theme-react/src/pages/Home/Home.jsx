// src/App.js
import React, { useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import GameCard from '../../components/GameCard/GameCard'
import { Helmet } from 'react-helmet';
import AdCMP from '../../components/ADS/AdCMP';
import { Link } from 'react-router-dom';

const Home = () => {
    const { gamesList } = useDarkMode();

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
        <div>

            <Helmet>
                <meta charset="utf-8" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="TheGameZone.fun" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0, minimal-ui, shrink-to-fit=no, viewport-fit=cover" />

                <title>Play Online Games on Thegamezone: Best Free Games Online | GameZone</title>
                <meta name="title" content="Play Online Games on Thegamezone: Best Free Games Online | GameZone" />
                <meta name="description"
                    content="Play free online games at TheGameZone, the best place to play high-quality browser games. Play a wide genre of online games instantly with no download or sign-up for free!" />

                <meta name="keywords" content="free online games, play games online, TheGameZone, best free games, online gaming" />

                <meta property="og:title" content="Play Online Games on Thegamezone: Best Free Games Online | GameZone" />
                <meta property="og:description"
                    content="Play free online games at TheGameZone, the best place to play high-quality browser games. Play a wide genre of online games instantly with no download or sign-up for free!" />
                <meta property="og:url" content="https://thegamezone.fun/" />
                <meta property="og:site_name" content="TheGameZone.fun" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://thegamezone.fun/logo.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Play Online Games on Thegamezone: Best Free Games Online | GameZone" />
                <meta name="twitter:description"
                    content="Play free online games at TheGameZone, the best place to play high-quality browser games. Play a wide genre of online games instantly with no download or sign-up for free!" />
                <meta name="twitter:image" content="https://thegamezone.fun/logo.png" />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://thegamezone.fun/" />
                <link rel="canonical" href="https://www.thegamezone.fun/" />
            </Helmet>

            <div className="p-4 mt-10 sm:ml-56">
                <div className="rounded-lg w-full h-fit text-center items-center">
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


                <h1 className='text-black dark:text-white font-bold text-[24px]'>👍 All Games</h1>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-4 mt-2">
                    {gamesList && gamesList?.slice(0, 70)?.map((_ele, i) => {
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
                <div className="rounded-lg w-full h-fit text-center items-center">
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

            <div>
                <div className="p-4 sm:ml-56 mt-4">
                    <div className="container mx-auto m-10">
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-400 w-full flex items-center mb-7 lg:mb-12 xl:mb-16">
                            <div className="p-4 md:p-9">
                                <header className="text-base mb-6 lg:py-[3.5px] lg:text-xl !leading-none font-bold relative pl-4 after:absolute after:w-[3px] md:after:w-[4px] after:h-[110%] after:top-[-5%] after:bg-[#5AC4D1] after:left-0 after:rounded-md">
                                    <span>About GameZone</span>
                                </header>
                                <div className="2xl:pr-36 flex flex-col gap-4 sm:gap-9 lg:gap-10">
                                    <section>
                                        <h1 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Discover Endless Fun with TheGameZone
                                        </h1>
                                        <p className="leading-8 font-medium capitalize">
                                            TheGameZone is your ultimate destination for free online games, offering a diverse selection of thrilling experiences for players of all ages. Accessible on any device—desktop, mobile, or tablet—our platform delivers instant entertainment without the hassle of downloads or registrations.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Why Choose TheGameZone?
                                        </h2>
                                        <p className="leading-8 font-medium capitalize">
                                            TheGameZone stands out as a trusted platform for online gaming, offering:
                                        </p>
                                        <div className="px-10">
                                            <ul className="list-disc text-base font-medium capitalize leading-8">
                                                <li>A constantly updated library with thousands of games</li>
                                                <li>Quick access—no downloads, pop-ups, or logins required</li>
                                                <li>Games optimized for desktop, mobile, and tablets</li>
                                                <li>Exciting single and multiplayer experiences</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Our Vision
                                        </h2>
                                        <p className="leading-8 font-medium capitalize">
                                            At TheGameZone, we are committed to creating a seamless gaming experience that connects players across the globe. Our platform is designed to inspire joy, creativity, and friendly competition for casual and serious gamers alike.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">Our Popular Games</h2>
                                        <p className="leading-8 font-medium capitalize">
                                            Not sure where to start? Try one of our top-rated games:
                                        </p>
                                        <div className="px-10">
                                            <ul className="list-disc text-base font-medium capitalize leading-8">
                                                <li><Link to="/game/ludo-dash" title="Ludo Dash Game">Ludo Dash</Link></li>
                                                <li><Link to="/game/fruit-chop" title="Fruit Chop Game">Fruit Chop</Link></li>
                                                <li><Link to="/game/escape-run" title="Escape Run Game">Escape Run</Link></li>
                                                <li><Link to="/game/save-your-pinky" title="Save Your Pinky Game">Save Your Pinky</Link></li>
                                                <li><Link to="/game/happy-kittens-puzzle" title="Happy Kittens Puzzle Game">Happy Kittens Puzzle</Link></li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Explore Our Top Categories
                                        </h2>
                                        <p className="leading-8 font-medium capitalize">
                                            Whether you're seeking action, strategy, sports, or puzzles, TheGameZone has it all. Dive into popular categories such as:
                                        </p>
                                        <div className="px-10">
                                            <ul className="list-disc text-base font-medium capitalize leading-8">
                                                <li>Action-packed adventures</li>
                                                <li>Relaxing puzzles</li>
                                                <li>Fast-paced racing challenges</li>
                                                <li>Classic and retro games</li>
                                                <li>Engaging multiplayer experiences</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Join Our Community
                                        </h2>
                                        <p className="leading-8 font-medium capitalize">
                                            Be part of TheGameZone's growing community of gamers. Share your favorite games, compete with friends, and discover new challenges every day. With no barriers to entry, gaming has never been this fun and easy.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="text-xl lg:text-2xl mb-6 font-bold capitalize">
                                            Your Gateway to Free Online Gaming
                                        </h2>
                                        <p className="leading-8 font-medium capitalize">
                                            TheGameZone is more than just a platform; it's a haven for gamers who value convenience, variety, and quality. Start your gaming journey today and enjoy unlimited access to the best free games online.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="yandex_rtb_R-A-13709192-1" className='mt-5' />
        </div>
    );
};

export default Home;
