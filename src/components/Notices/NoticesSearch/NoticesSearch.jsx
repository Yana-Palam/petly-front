import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';

function NoticesSearch() {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    setSearchParams({ query });
    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Search"
          value={search}
        />
        <button type="submit" aria-label="search button">
          <BsSearch size="32px" />
        </button>
      </form>
    </>
  );
}

export default NoticesSearch;
