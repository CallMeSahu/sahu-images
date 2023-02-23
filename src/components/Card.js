import React from 'react';

const Card = ({ image }) => {
    const tags = image.tags.split(",");
    return (
        <div className='max-w-sm shadow-lg overflow-hidden rounded'>
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-lg mb-2">Photo by {image.user}</div>
            <ul>
            <li><strong>Views: </strong>{image.views}</li>
            <li><strong>Likes: </strong>{image.likes}</li>
            <li><strong>Download: </strong>{image.downloads}</li>
            </ul>
        </div>
        <div className="px-6 py-4">
            {tags.map((tag, index) => (
                <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2'>
                 #{tag}
                </span>
            ))}
        </div>
        </div>
    )
}

export default Card