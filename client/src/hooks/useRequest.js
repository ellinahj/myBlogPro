import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useRequest(url) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setError(null);
      try {
        setLoading(true);
        const res = await axios.get(url);
        setResponse(res);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return [loading, response, error];
}
