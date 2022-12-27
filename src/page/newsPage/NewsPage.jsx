import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import NewsList from '../../components/News/NewsList';
import { getDate } from '../../services/api/DataApi';
import { Section, StyledContainer, StyledTitle } from './NewsPage.styled';

function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDate('news');
        setNews(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);
  return (
    <Section>
      <StyledContainer>
        <StyledTitle>News page</StyledTitle>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {news && <NewsList news={news} />}
      </StyledContainer>
    </Section>
  );
}

export default NewsPage;
