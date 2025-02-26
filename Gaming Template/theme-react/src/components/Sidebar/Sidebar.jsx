// import React, { useState, useRef, useEffect } from 'react';
// import { useDarkMode } from '../../contexts/DarkModeContext';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//     const { darkMode, toggleDarkMode, gamesList } = useDarkMode();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const sidebarRef = useRef(null);

//     // Handle mobile sidebar toggle
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Close sidebar on outside click
//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (
//                 sidebarRef.current &&
//                 !sidebarRef.current.contains(event.target) &&
//                 isSidebarOpen
//             ) {
//                 setIsSidebarOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, [isSidebarOpen]);

//     const uniqueCategories = [...new Set(gamesList?.map((game) => game.categories.en).flat())];
//     const uniqueTag = [...new Set(gamesList?.map((game) => game.tags.en).flat())];

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between">
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center justify-start rtl:justify-end">
//                             <button
//                                 onClick={toggleSidebar}
//                                 aria-controls="logo-sidebar"
//                                 type="button"
//                                 className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                             >
//                                 <span className="sr-only">Open sidebar</span>
//                                 <svg
//                                     className="w-6 h-6"
//                                     aria-hidden="true"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         clipRule="evenodd"
//                                         fillRule="evenodd"
//                                         d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                                     />
//                                 </svg>
//                             </button>
//                             <div className='flex justify-between '>
//                                 <a href="/" className="flex ms-2 md:me-24">
//                                     <img
//                                         src={`/logo.png`}
//                                         className="h-8 me-3"
//                                         alt="thegamezone Logo"
//                                     />
//                                     <span className="self-center text-xl font-cursive font-bold sm:text-2xl whitespace-nowrap dark:text-white">
//                                         Taji Games
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex gap-2 items-center'>
//                         <a target='_blank' href='https://9841.play.gamezop.com/'><img src='/icons/games_win.png' alt="gamezop" width="32px" /></a>
//                         <a target='_blank' href='https://9842.read.newszop.com/'><img src='/icons/news.png' alt="newszop" width="40px" /></a>
//                     </div>
//                 </div>
//             </nav>

//             {/* Sidebar */}
//             <aside
//                 id="logo-sidebar"
//                 ref={sidebarRef}
//                 className={`fixed top-0 left-0 z-40 w-56 h-screen pt-20 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
//                 aria-label="Sidebar"
//             >
//                 <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
//                     <ul className="space-y-2 font-medium mb-10">
//                     <li>
//                             <Link
//                                 to={`/category/all-games`}
//                                 onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">Main Games</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to={`/category/all-games`}
//                                 onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">Other Games</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to={`https://9842.read.newszop.com/`}
//                                 onClick={() => setIsSidebarOpen(false)}
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">NewsZop</span>
//                             </Link>
//                         </li>
//                         {uniqueCategories?.map((item, i) => (
//                             <li key={i}>
//                                 <Link
//                                     to={`/category/${item?.toLowerCase()?.replace(/ /g, '-')}`}
//                                     onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
//                                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                                 >
//                                     <img src="/logo.png" alt={item} width="20px" />
//                                     <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
//                                 </Link>
//                             </li>
//                         ))}
//                         {uniqueTag?.map((item, i) => (
//                             <li key={i}>
//                                 <Link
//                                     to={`/tag/${item?.toLowerCase()?.replace(/ /g, '-')}`}
//                                     onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
//                                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                                 >
//                                     <img src="/logo.png" alt={item} width="20px" />
//                                     <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
//                                 </Link>
//                             </li>
//                         ))}
//                         <li>
//                             <Link
//                                 to={`https://9841.play.gamezop.com/`}
//                                 onClick={() => setIsSidebarOpen(false)}
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">GameZop Originals</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to={`/blog`}
//                                 onClick={() => setIsSidebarOpen(false)}
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">Blogs</span>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 to={`https://thopgame.in/category/news/gamingnews`}
//                                 onClick={() => setIsSidebarOpen(false)}
//                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                             >
//                                 <img src="/logo.png" alt="all games" width="20px" />
//                                 <span className="flex-1 ms-3 whitespace-nowrap">Gaming News</span>
//                             </Link>
//                         </li>
//                     </ul>

//                     {/* Dark Mode Toggle */}
//                     <button
//                         onClick={toggleDarkMode}
//                         className="absolute bottom-4 left-4 p-2 dark:bg-white bg-gray-100 text-gray-500 dark:text-gray-400  rounded-full"
//                     >
//                         {darkMode ? (
//                             <img src='https://static.gamezop.com/comet/assets/img/theme/moon-fill.svg' width="20px" />
//                         ) : (
//                             <img src='https://static.gamezop.com/comet/assets/img/theme/sun-fill.svg' width="20px" />
//                         )}
//                     </button>
//                 </div>
//             </aside>
//         </>
//     );
// };

// export default Sidebar;
import React, { useState, useRef, useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { darkMode, toggleDarkMode, gamesList } = useDarkMode();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOtherGamesOpen, setIsOtherGamesOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Handle mobile sidebar toggle
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Toggle Other Games dropdown
    const toggleOtherGames = () => {
        setIsOtherGamesOpen(!isOtherGamesOpen);
    };

      // Toggle Sign In Modal
      const toggleSignIn = () => {
        setIsSignInOpen(!isSignInOpen);
    };

    // Close sidebar on outside click
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isSidebarOpen
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSidebarOpen]);

    const uniqueCategories = [...new Set(gamesList?.map((game) => game.categories.en).flat())];

    return (
        <>
                   {/* Navbar */}
//             <nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-200 dark:bg-white-800 dark:border-white-700">
//                 <div className="px-3 py-1.5 lg:px-5 lg:pl-3 flex w-full">
//                     <div className="flex items-center justify-between ">
//                         <div className="flex items-center justify-start rtl:justify-end pe-20" >
//                             <button
                                onClick={toggleSidebar}
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex  items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-500 dark:hover:bg-gray-600 dark:focus:ring-black
                                -600 "
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-4"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>
                            </button>
                            <div className='flex justify-between' >
                                <a href="/" className="flex ms-2 md:me-40">
                                    <img
                                        src={`/logo2.jpg`}
                                        className="h-16 me-20"
                                        alt="thegamezone Logo"
                                    />
                                    <span className="self-center text-xl font-cursive font-bold sm:text-2xl whitespace-nowrap dark:text-white">

                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex w-full items-center justify-end'>
                    <button onClick={toggleSignIn} className="text-white">Sign In</button> */}
                        {/* <a target='_blank' href='https://9841.play.gamezop.com/'><img src='/icons/games_win.png' alt="gamezop" width="32px" /></a> */}
                        {/* <a target='_blank' href='https://9842.read.newszop.com/'><img src='/icons/news.png' alt="newszop" width="40px" /></a>
                    </div> */}
                </div>
            </nav>
             {/* Sign In Modal */}
             {/* {isSignInOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold">Sign In</h2>
                        <button onClick={toggleSignIn} className="absolute top-2 right-2">✖</button>
                        <form className="mt-4">
                            <input type="text" placeholder="Username" className="block mb-2 p-2 border" />
                            <input type="password" placeholder="Password" className="block mb-2 p-2 border" />
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
                        </form>
                    </div>
                </div>
            )} */}
             
            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-56 h-screen pt-20 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-black border-r border-gray-200 sm:translate-x-0 dark:bg-black-800 dark:border-white-700`}

            >
                <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-black py-8" >
                    <ul className="space-y-2 font-medium mb-10">
                        {/* All Games */}
                        <li>
                            <Link
                                to={`/category/games`}
                                onClick={() => setIsSidebarOpen(false)}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img src="/logo2.jpg" alt="all games" width="40px" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Premium Games</span>
                            </Link>
                        </li>

                        {/* Other Games */}
                        <li>
                            <button
                                onClick={toggleOtherGames}
                                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <div className="flex items-center">
                                    <img src="/logo2.jpg" alt="other games" width="40px" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Other Games</span>
                                </div>
                                <span>{isOtherGamesOpen ? '▲' : '▼'}</span>
                            </button>
                        </li>

                        {/* Dropdown */}
                        {isOtherGamesOpen && (
                            <ul className="pl-5 space-y-2">
                                {uniqueCategories?.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            to={`/category/${item?.toLowerCase()?.replace(/ /g, '-')}`}

                                            onClick={() => setIsSidebarOpen(false)}
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        >
                                            <img src="/logo2.jpg" alt={item} width="20px" />
                                            <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </ul>

                    {/* Dark Mode Toggle */}
                    {/* <button
                        onClick={toggleDarkMode}
                        className="absolute bottom-4 left-4 p-2 dark:bg-white bg-gray-100 text-gray-500 dark:text-gray-400 rounded-full"
                    >
                        {darkMode ? (
                            <img src='https://static.gamezop.com/comet/assets/img/theme/moon-fill.svg' width="20px" />
                        ) : (
                            <img src='https://static.gamezop.com/comet/assets/img/theme/sun-fill.svg' width="20px" />
                        )}
                    </button> */}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;