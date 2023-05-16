import React, { useEffect } from 'react';

function Button90({amount}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://confirmo.net/sdk/scripts/confirmo.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        Confirmo.PaymentButton.initialize({
            "id": "bp-payment-button",
            "url": "https://confirmo.net",
            "buttonType": "SIMPLE",
            "paymentButtonId": "MGNQ1vlmLX4Z8wkJrQzmnjayWg6RYBAoOdr",
            "values": {
                "merchantAmount": amount,
                "productName": "FXP CHALLENGE",
                "productDescription": null,
                "reference": null,
                "returnUrl": null,
                "overlay": true
            }
        })
    }
  }, [amount]);

  return <div id="bp-payment-button"></div>;
}

export default Button90;
