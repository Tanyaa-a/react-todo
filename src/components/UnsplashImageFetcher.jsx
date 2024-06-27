import { useState, useEffect } from 'react';

function UnsplashImageFetcher() {
  const [error, setError] = useState('');

  async function getPicsUnsplash() {
    const url = `https://api.unsplash.com/photos/random?query=nature&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status === 403) {
        throw new Error('Failed to fetch photo from Unsplash API.');
      } else if (res.status === 404) {
        throw new Error('No photos found.');
      }

      document.body.style.backgroundImage = `url(${data.urls.regular})`;
      document.body.style.backgroundColor = ''; 
      setError('');
    } catch (error) {
      document.body.style.backgroundImage = ''; 
      document.body.style.backgroundColor = 'blue'; 
      setError(error.message);
    }
  }

  useEffect(() => {
    getPicsUnsplash();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UnsplashImageFetcher;
