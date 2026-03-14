import { useEffect, useRef } from 'react';

const { VITE_CLOUDFLARE_SITE_KEY } = import.meta.env;

const Turnstile = ({ onVerify }) => {
  const ref = useRef(null);

  useEffect(() => {
    let widgetId;

    const render = () => {
      if (!window.turnstile || !ref.current) return;

      widgetId = window.turnstile.render(ref.current, {
        sitekey: VITE_CLOUDFLARE_SITE_KEY,
        callback: (token) => onVerify(token),
      });
    };

    window.turnstile ? render() : window.addEventListener('load', render);

    return () => {
      if (window.turnstile && widgetId) {
        window.turnstile.remove(widgetId);
      }
    };
  }, []);

  return <div ref={ref}></div>;
};

export default Turnstile;
