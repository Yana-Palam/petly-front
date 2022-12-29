import { useEffect, useState } from 'react';
import Friends from '../../components/Friends';
import Loader from '../../components/Loader';
import { getDate } from '../../services/api/DataApi';
import { Section, StyledContainer, StyledTitle } from './OurFriendsPage.styled';

function OurFriendsPage() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDate('friends');
        setFriends(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFriends();
  }, []);
  return (
    <Section>
      <StyledContainer>
        <StyledTitle>Our friend</StyledTitle>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {friends && <Friends friends={friends} />}
      </StyledContainer>
    </Section>
  );
}

export default OurFriendsPage;
