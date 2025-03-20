import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeCard = ({ url }) => {
    const [qrCodeData, setQrCodeData] = useState('');

    useEffect(() => {
        if (url) {
            QRCode.toDataURL(url, {
                width: 800,
                margin: 2,
                color: {
                    dark: '#335383ff'
                }
            })
                .then(dataUrl => {
                    setQrCodeData(dataUrl);
                })
                .catch(err => {
                    console.error("Error generating QR Code", err);
                    setQrCodeData('invalid');
                });
        }
    }, [url]);

    return (
        <div className="qr-code">
            {qrCodeData && qrCodeData !=='invalid' ? (
                <>
                    <h3>Your QR Code:</h3>
                    <img src={qrCodeData} alt="qr-code" />
                    <br />
                    <button>
                    <a download="qrCode.png" href={qrCodeData} className='w-full'>Download</a>
                    </button>
                </>
            ) : (
                <p>Invalid URL entered, please enter a valid URL</p>
            )}
        </div>
    );
};

export default QRCodeCard;
