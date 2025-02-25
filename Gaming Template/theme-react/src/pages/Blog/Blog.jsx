import React from 'react'
import { useDarkMode } from '../../contexts/DarkModeContext';
import BlogCard from '../../components/BlogCard/BlogCard';
import AdCMP from '../../components/ADS/AdCMP';


function Blog() {
    const { gamesList } = useDarkMode();
    return (
        <div className="p-4 mt-12 sm:ml-56">
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
            <h1 className='text-black dark:text-white font-bold text-[24px]'>Games Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
                {gamesList && gamesList.map((_ele, i) => {
                    const GetSlug = _ele?.name?.en?.toLowerCase().replace(/\s+/g, "-");
                    return (
                        <React.Fragment key={i}>
                            <BlogCard
                                id={i}
                                slug={GetSlug}
                                name={_ele?.name?.en}
                                banner={_ele?.assets?.cover}
                                link={_ele?.URL}
                                img={_ele?.assets?.square}
                                _ele={_ele}
                            />
                        </React.Fragment>
                    );
                })}
                {gamesList.length === 0 && (
                    <div className="col-span-12 lg:col-span-12 rounded-lg bg-white w-full h-40 flex justify-center items-center my-4">
                        <h2 className="text-[28px] font-bold">No games found.</h2>
                    </div>
                )}
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
    )
}

export default Blog