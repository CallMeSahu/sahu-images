import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false);
    })
    .catch(error => console.error(error))
  }, [])

  return (
    <div className='max-w-sm shadow-lg overflow-hidden rounded'>
      <img src="https:/source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-lg mb-2">Photo by Siddhartha Sahu</div>
        <ul>
          <li><strong>Views: </strong>4000</li>
          <li><strong>Likes: </strong>1000</li>
          <li><strong>Download: </strong>500</li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag2</span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag3</span>
      </div>
    </div>
  );
}

export default App;
