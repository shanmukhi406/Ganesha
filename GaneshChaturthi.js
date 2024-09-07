import React, { useState, useEffect } from 'react';
import './GaneshChaturthi.css';
import ganesh from'./images/ganesh.jpeg';

const GaneshChaturthi = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    document.body.classList.add('body');
    return () => {
      document.body.classList.remove('body');
    };
  }, []);

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>
        Happy GaneshChaturthi
      </button>
      {showMessage && (
        <div>
          <h1>Ganesh Chaturthi</h1>
          <p>May this Ganesh Chaturthi bring health, wealth, and prosperity to everyone. I hope you have a joyous and blessed festival!</p>

          <div className="main__img">

                    <img src={ganesh} width="300px" alt="" />

                </div>
        </div>
        
      )}
    </div>
  );
};

export default GaneshChaturthi;
