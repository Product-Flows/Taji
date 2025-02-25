import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function GamesPreview() {

    const { name } = useParams();
    const [state, setState] = useState([]);

    const getGameListFunc = async () => {
        const api_res = await axios.get("https://pub.gamezop.com/v3/games?id=9632&lang=en")
        const New_Data = api_res?.data?.games?.filter((item) => item?.name?.en?.toLowerCase().replace(/\s+/g, "-") === name);
        setState(New_Data[0] || null);
    }

    useEffect(() => {
        getGameListFunc();
    }, [name]);

    return (
        <div>
            <Helmet>
                {/* <!-- Title and Description --> */}
                <title>{`Play ${state?.name?.en} Online | TheGameZone – Free Game Preview`}</title>
                <meta name="description" content={`${state?.description?.en} | TheGameZone`} />

                {/* <!-- Keywords for SEO --> */}
                <meta name="keywords" content={`play ${state?.name?.en} online, free ${state?.name?.en} game, ${state?.name?.en} game preview, online games, TheGameZone`} />

                {/* <!-- Open Graph Meta Tags for Social Media --> */}
                <meta property="og:title" content={`Play ${state?.name?.en} Online | TheGameZone – Free Game Preview`} />
                <meta property="og:description" content={`Discover ${state?.name?.en} on TheGameZone! ${state?.description?.en} Enjoy this game and many more for free online.`} />
                <meta property="og:url" content={`https://thegamezone.fun/game/${state?.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={`https://thegamezone.fun/assets/images/games/${state?.image}`} />
                <meta property="og:locale" content="en_US" />

                {/* <!-- Twitter Card Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Play ${state?.name?.en} Online | TheGameZone – Free Game Preview`} />
                <meta name="twitter:description" content={`${state?.description?.en} | TheGameZone`} />
                <meta name="twitter:image" content={`https://thegamezone.fun/assets/images/games/${state?.image}`} />

                {/* <!-- Robots --> */}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://thegamezone.fun/game/${state?.slug}`} />

                {/* <!-- Structured Data for Rich Snippets (JSON-LD) --> */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "http://schema.org",
            "@type": "VideoGame",
            "name": "${state?.name?.en}",
            "url": "https://thegamezone.fun/game/${state?.slug}",
            "image": "https://thegamezone.fun/logo.png",
            "description": "${state?.description?.en}",
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

            <iframe src={state?.url} title={state?.name?.en} allow="autoplay" className='w-screen h-screen' />

        </div>
    )
}

export default GamesPreview