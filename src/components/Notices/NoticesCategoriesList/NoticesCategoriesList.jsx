import react from 'react';

import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';
import Pagination from 'components/Common/Pagination';

let PageSize = 2;

function NoticesCategoriesList({ notices = [], getBtnInfo }) {
  const [currentPage, setCurrentPage] = react.useState(1);

  const currentNoticesData = react.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return notices.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const getNotice = (btnId, btnType, favorite) => {
    getBtnInfo(btnId, btnType, favorite);
  };
  return (
    <>
      <ListNotices>
        {currentNoticesData.map(({ ...item }) => (
          <NoticeCategoryItem key={item._id} {...item} getNotice={getNotice} />
        ))}
      </ListNotices>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={notices.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}

export default NoticesCategoriesList;

//TODO прописати пропси.
