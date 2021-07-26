import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setNews(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://118.67.132.125:8080/notice/noticelist.do'
        );
        setNews(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!news) return null;
  return (
    <ul>
      {news.map(newss => (
        <li key={newss.id}>
          {newss.idx} {newss.newscon} ({newss.regdate})  {newss.editdate}
        </li>
      ))}
    </ul>
  );
}

export default Users;