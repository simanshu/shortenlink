// components/LinkShortener.js
import React, { useState } from 'react';
import axios from 'axios';

const LinkShortener = ({ onLinkShortened }) => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const handleShorten = async () => {
    try {

      const response = await axios.post('/shortlink', { originalLink, userId: 'user_id_placeholder' });
    
      setShortLink(response.data.shortLink);
      onLinkShortened();
    } catch (error) {
      console.error('Error during shortening link:', error);
      
    }
  };

  return (
    <div>
      <h3>Link Shortener</h3>
      <form>
        <label>
          Original Link:
          <input
            type="text"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleShorten}>
          Shorten
        </button>
      </form>
      {shortLink && (
        <div>
          <h4>Short Link:</h4>
          <p>{shortLink}</p>
        </div>
      )}
    </div>
  );
};

export default LinkShortener;
