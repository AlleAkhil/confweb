import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the script source to the Botpress Web Chat inject.js
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    
    // Append the script element to the document body
    document.body.appendChild(script);

    // Remove the script element when the component unmounts to clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {
    // Create a script element for the Botpress Web Chat config.js
    const configScript = document.createElement('script');

    // Set the script source to the Botpress Web Chat config.js
    configScript.src = 'https://mediafiles.botpress.cloud/2bc86775-c34c-44fc-bf3b-1736a1eb026e/webchat/config.js';
    
    // Append the script element to the document body
    document.body.appendChild(configScript);

    // Remove the script element when the component unmounts to clean up
    return () => {
      document.body.removeChild(configScript);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    // Your component JSX here
    <div>
      {/* Your other React components */}
    </div>
  );
};

export default BotpressChat;
