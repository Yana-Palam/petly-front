import { helpers } from 'utils/helpers';

import Box from 'components/Common/Box';
import {
  ItemNotice,
  ImgNotice,
  IconFavorite,
  NoticeFavoriteBtn,
  NoticeTitle,
  NoticeListInfo,
  NoticeItemInfo,
  BtnLearnMore,
  NoticeCategory,
  WrapNoticeCategory,
  NoticeItemInfoValue,
  NoticeItemInfoTitle,
  BtnDelSvg,
  BtnDelOwn,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  _id,
  category,
  avatarURL,
  title,
  breed,
  location,
  birthday,
  favorite,
  // own,
  price,
  getNotice,
}) {
  const handleClick = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    getNotice(btnId, btnType);
  };

  const own = true;
  return (
    <ItemNotice own={own}>
      <Box position="relative">
        <Box position="absolute" top="12px" right="12px">
          <NoticeFavoriteBtn
            type="button"
            id={_id}
            onClick={handleClick}
            data-favorite="favorite"
          >
            <IconFavorite favorite={favorite /*.toString()*/} />
          </NoticeFavoriteBtn>
        </Box>

        <ImgNotice src={avatarURL} alt="Animal" />
        <WrapNoticeCategory>
          <NoticeCategory>{category}</NoticeCategory>
        </WrapNoticeCategory>
      </Box>

      <Box pl={'20px'}>
        <NoticeTitle>{title}</NoticeTitle>

        <NoticeListInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle>Breed:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>{breed}</NoticeItemInfoValue>
          </NoticeItemInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle>Place:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>{location}</NoticeItemInfoValue>
          </NoticeItemInfo>
          <NoticeItemInfo>
            <NoticeItemInfoTitle> Age:</NoticeItemInfoTitle>
            <NoticeItemInfoValue>
              {helpers.getAge(birthday)}
            </NoticeItemInfoValue>
          </NoticeItemInfo>
          {category === 'sell' && (
            <NoticeItemInfo>
              <NoticeItemInfoTitle> Price:</NoticeItemInfoTitle>
              <NoticeItemInfoValue>{price} uah</NoticeItemInfoValue>
            </NoticeItemInfo>
          )}
        </NoticeListInfo>
      </Box>

      <BtnLearnMore
        type="button"
        id={_id}
        onClick={handleClick}
        data-modal="modal"
        own={own}
        category={category}
      >
        Learn more
      </BtnLearnMore>

      {own && (
        <BtnDelOwn
          type="button"
          id={_id}
          onClick={handleClick}
          data-delete="delete"
        >
          Delete <BtnDelSvg />
        </BtnDelOwn>
      )}
    </ItemNotice>
  );
}

export default NoticeCategoryItem;

//TODO прописати пропси.
