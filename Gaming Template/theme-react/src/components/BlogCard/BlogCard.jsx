import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ name, banner, slug, img, _ele }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => setImageLoaded(true);

    return (
        <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <Link to={`/blog/${slug}`}>
                <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                    {!imageLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700"></div>
                    )}
                    <img
                        src={banner}
                        alt={name}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                        {_ele?.description?.en}
                    </p>
                    {(_ele?.tags?.en || _ele?.categories?.en) && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {_ele.tags.en.map((tag, index) => (
                                <Link to={`/tag/${tag?.toLowerCase()?.replace(/ /g, '-')}`}>
                                    <span
                                        key={index}
                                        className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                </Link>
                            ))}
                            {_ele.categories.en.map((category, index) => (
                                <Link to={`/category/${category?.toLowerCase()?.replace(/ /g, '-')}`}>
                                    <span
                                        key={index}
                                        className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                                    >
                                        {category}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default BlogCard;
