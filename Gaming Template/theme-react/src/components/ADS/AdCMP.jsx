import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AdCMP = ({ AdSlot, isTagNeeded = false, adSize = '' }) => {
    const adElementId = uuidv4();
    const [isAdModalLoading, setIsAdModalLoading] = useState(true);
    const adRef = useRef(null);

    const [width, height] = adSize.split('x').map(Number);
    const adStyle = {
        width: `${width || 300}px`, // Default width
        height: `${height || 250}px`, // Default height
    };

    useEffect(() => {
        const checkAdStatus = () => {
            const adElement = adRef.current;
            const adStatus = adElement?.getAttribute('data-adsbygoogle-status');
            const adFillStatus = adElement?.getAttribute('data-ad-status');
            setIsAdModalLoading(adStatus === null || adFillStatus !== 'filled');
        };

        const observer = new MutationObserver(checkAdStatus);
        if (adRef.current) {
            observer.observe(adRef.current, { attributes: true });
        }

        return () => {
            observer.disconnect();
        };
    }, [AdSlot]);

    useEffect(() => {
        if (adRef.current && adRef.current.offsetWidth > 0) {
            try {
                window.adsbygoogle = window.adsbygoogle || [];
                window.adsbygoogle.push({});
            } catch (e) {
                console.error("Adsbygoogle failed to load:", e);
            }
        }
    }, [AdSlot, isAdModalLoading]);

    return (
        <>
            {/* <div
                style={{
                    minHeight: `${height || 250}px`,
                }}
                className={`py-4 w-[80%] my-3 mx-auto flex flex-col items-center bg-gray-300 dark:bg-gray-400 relative ${isAdModalLoading ? 'overflow-hidden' : ''
                    }`}
            >
                <p className="text-[10px] uppercase my-auto">Advertisement Place</p>

            </div> */}
        </>
    );
};

export default AdCMP;
