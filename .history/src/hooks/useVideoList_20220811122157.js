import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';

import { useEffect, useState } from 'react';

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videRef = ref(db, 'videos');
      const videoQuery = query(videRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
