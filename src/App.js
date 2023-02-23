import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

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
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (
            <Card key={image.id} image={image} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
