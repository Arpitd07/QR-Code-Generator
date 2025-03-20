import React, { useState } from 'react'
import QRCodeCard from './components/QrCodeCard'

function App() {

  const [url, setUrl] = useState('')
  const [showQR, setShowQR] = useState(false)
  const [error, setError] = useState('');

  const generateQR = () => {
    if (url.trim() === '') {
      setError('Enter the URL');
      setShowQR(false);
      setTimeout(() => {
        setError('')
      }, 5000);
    }
    setUrl(url);
    setShowQR(true);
  };

  const handleClear = () => {
    setUrl('');
    setShowQR(false);
  };

  const enterKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateQR();
    }
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="url"
        placeholder="Enter a valid URL"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)} 
        onKeyDown = {enterKeyPress}
      />
      <button onClick={generateQR}>Generate</button>
      {showQR && <button onClick={handleClear}>Clear</button>}
      {error && <p classnName="mt-2 mb-1">{error}</p>}
      {showQR && <QRCodeCard url={url} />}
    </div>
  );
}

export default App;
