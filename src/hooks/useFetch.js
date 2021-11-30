import { useState, useEffect } from 'react';

export function useFetch(url, method = 'GET') {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const apiHost = "http://chinonthetank.com/wp-json/wp/v2/";
  const formattedEnpoint = `${apiHost}${url}`;

  useEffect(() => {
    const loaderEl = document.querySelector('[data-component="LoaderIcon"]');

    setLoading(true);
    // loaderEl.classList.add('_request-active');

    console.log('*** useFetch Fn updated ***');

    fetch(`${formattedEnpoint}`, {
             method: method,
           })
           .then(response => {
              if (response.status === 200) {
                return response.json();
              } else {
                setHasError(true);
                setLoading(false);
              }
           })
           .then(data => {
             setResponse(data);
             setLoading(false);

            //  loaderEl.classList.remove('_request-active');
            }
          );
    }, [url, formattedEnpoint, method]);

    return [ response, loading, hasError ];
}
