// src/hooks/useAxiosFetch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (postsURL, contestsURL, imagesURL) => {
  const [postsData, setPostsData] = useState([]);
  const [contestsData, setContestsData] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsResponse, contestsResponse, imagesResponse] = await Promise.all([
          axios.get(postsURL, { cancelToken: source.token }),
          axios.get(contestsURL, { cancelToken: source.token }),
          axios.get(imagesURL, { cancelToken: source.token })
        ]);
        if (isMounted) {
          setPostsData(postsResponse.data);
          setContestsData(contestsResponse.data);
          setImagesData(imagesResponse.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setPostsData([]);
          setContestsData([]);
          setImagesData([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [postsURL, contestsURL, imagesURL]);

  return { postsData, contestsData, imagesData, fetchError, loading };
};

export default useAxiosFetch;
