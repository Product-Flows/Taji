import React, { useEffect, useState } from 'react'
import GameCard from '../../components/GameCard/GameCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import AdCMP from '../../components/ADS/AdCMP';

function Tag() {
  const { name } = useParams();
  const [state, setState] = useState([]);

  const getGameListFunc = async () => {
    const api_res = await axios.get("https://pub.gamezop.com/v3/games?id=9632&lang=en")
    if (name === "all-games") {
      setState(api_res?.data?.games);
    } else {
      // const New_Data = api_res?.data?.games?.filter((item) => item?.tag?.en[0]?.toLowerCase().replace(/\s+/g, "-") === name);
      const New_Data = api_res?.data?.games?.filter((item) =>
        item?.tags?.en?.some((tag) =>
          tag?.toLowerCase().replace(/\s+/g, "-") === name
        )
      );
      setState(New_Data);
    }
  }


  useEffect(() => {
    getGameListFunc();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [name]);

  return (
    <>
      <Helmet>
        <title>{`${name.replaceAll("-", " ")} Games 👥 Play on TheGameZone `}</title>
        <meta name="description" content={`Play the Best Online ${name.replaceAll("-", " ")} Games for Free on TheGameZone, No Download or Installation Required. 🎮 Play ${state[0]?.name?.en} and Many More Right Now!`} />

        <meta name="keywords" content={`${name.replaceAll("-", " ")} games, free ${state?.category?.en} games, play ${state[0]?.name?.en} online, TheGameZone`} />

        <meta property="og:title" content={`${name.replaceAll("-", " ")} Games 👥 Play on TheGameZone`} />
        <meta property="og:description" content={`Play the Best Online ${name.replaceAll("-", " ")} Games for Free on TheGameZone, No Download or Installation Required. 🎮 Play ${state[0]?.name?.en} and Many More Right Now!`} />
        <meta property="og:url" content={`https://thegamezone.fun/category/${name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://thegamezone.funlogo.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${name.replaceAll("-", " ")} Games 👥 Play on TheGameZone`} />
        <meta name="twitter:description" content={`Play the Best Online ${name.replaceAll("-", " ")} Games for Free on TheGameZone, No Download or Installation Required. 🎮 Play ${state[0]?.name?.en} and Many More Right Now!`} />
        <meta name="twitter:image" content={`https://thegamezone.fun/logo.png`} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://thegamezone.fun/category/${name}`} />

        <script type="application/ld+json">
          {`
        {
            "@context": "http://schema.org",
            "@type": "VideoGame",
            "name": "${name.replaceAll("-", " ")}",
            "category": "${name.replaceAll("-", " ")}",
            "url": "https://thegamezone.fun/category/${name}",
            "image": "https://thegamezone.fun/logo.png",
            "description": "${name.replaceAll("-", " ")}",
            "author": {
                "@type": "Organization",
                "name": "TheGameZone"
            },
            "publisher": {
                "@type": "Organization",
                "name": "TheGameZone"
            }
        }
        `}
        </script>
      </Helmet>


      <div className="p-4  mt-10 sm:ml-56">
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
        <h1 className='text-black dark:text-white font-bold text-[20px]'>{name?.toLocaleUpperCase()?.replaceAll("-", " ")} GAMES</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-4 mt-1">
          {state && state?.map((_ele, i) => {
            const GetSlug = _ele?.name?.en?.toLowerCase().replace(/\s+/g, "-");
            return (<>
              <GameCard key={i} id={i} slug={GetSlug} name={_ele?.name?.en} banner={_ele?.assets?.square} link={_ele?.URL} />
            </>
            )
          }

          )}
          {state.length === 0 && <div className="col-span-12 lg:col-span-12 rounded-lg bg-white w-full h-40 flex justify-center items-center my-4">
            <h2 className='text-[28px] font-bold'>
              No Games Found.
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
    </>
  )
}

export default Tag