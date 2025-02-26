import React, { useEffect, useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import GameCard2 from '../../components/GameCard/GameCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Category() {
  const { name } = useParams();
  const [state, setState] = useState([]);
  const [visibleGames, setVisibleGames] = useState(7);

  
  const getGameListFunc = async () => {
    try {
      let apiUrl = name === "games"
        ? "https://thingproxy.freeboard.io/fetch/https://tajigames.com/api/api.php?type=gameList"
        : "https://pub.gamezop.com/v3/games?id=9632&lang=en";

       
      const api_res = await axios.get(apiUrl);
      console.log("API RESPONSE ",api_res)
      // console.log("apiURL",api_res?.data?.games)
      if (name === "all-games" || name === "games") {
        setState(api_res?.data?.games);
      } else {
        const New_Data = api_res?.data?.games?.filter(
          (item) => item?.categories?.en[0]?.toLowerCase().replace(/\s+/g, "-") === name
        );
        setState(New_Data); 
      }
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  } ; 

  useEffect(() => {
     setVisibleGames(10); // Reset visible games when category changes
    window.scrollTo({ top: 0, behavior: "smooth" });
    getGameListFunc()
  },[name, getGameListFunc] );

  const handleViewMore = () => {
    setVisibleGames(state.length); // Load all remaining games
  };

  return (
    <>
      <Helmet>
        <title>{`${name.replaceAll("-", " ")} Games 👥 Play on TheGameZone `}</title>
        <meta 
          name="description" content={`Play the Best Online ${name.replaceAll("-", " ")} Games for Free on TheGameZone, No Download or Installation Required.`} 
        />
        <link rel="canonical" href={`https://thegamezone.fun/category/${name}`} />
      </Helmet>

      <div className="p-4 mt-10 sm:ml-56 bg-black border-white">
        <h1 className='text-black dark:text-white font-bold text-[20px] pt-10'>
          {name?.toUpperCase()?.replaceAll("-", " ")} GAMES
        </h1>
        
        <div className={`grid gap-4 mt-1 ${
          name === "all-games" ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-6" :
          name === "games" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" :
          "grid-cols-3 md:grid-cols-3 lg:grid-cols-10"
        }`}>
          {state.slice(0, visibleGames).map((_ele, i) => {
            console.log(state[0].url);
            const GetSlug = _ele?.name?.en?.toLowerCase().replace(/\s+/g, "-");
            return <GameCard key={i} state={state} id={i} slug={GetSlug ||state[i].url} name={_ele?.name?.en || state[i].title} banner={_ele?.assets?.square || state[i].icon} link={_ele?.URL ||state[i].url} />;
          })}
          {state.length === 0 && (
            <div className="col-span-12 rounded-lg bg-white w-full h-40 flex justify-center items-center my-4">
              <h2 className='text-[28px] font-bold'>No Games Found.</h2>
            </div>
          )}
        </div>
        
        {visibleGames < state.length && (
          <div className="text-center mt-4 min-w-full">
            <button 
              onClick={handleViewMore} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Category;