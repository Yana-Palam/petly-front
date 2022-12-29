import { helpers } from 'utils/helpers';
// import ModalNotice from '../ModalNotice/ModalNotice';

import {
  Title,
  AnimalsImg,
  AnimalsUl,
  AnimalsLi,
  AnimalsBtn,
  AnimalsDiv,
  AnimalsCategory,
  AnimalsBox,
  AnimalsCategoryDiv,
  AnimalsSpan,
  AnimalsSpanTitle,
  AnimalsCategoryBox,
  AnimalsFavorite,
  AnimalsFavoriteBtn,
  AnimalsFavoriteBox,
  AnimalsBtnBox,
  AnimalsDeleteSvg,
  AnimalsBtnDel,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  id,
  category,
  avatarURL,
  title,
  breed,
  location,
  birthday,
  getNotice,
}) {
  const handleClick = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    getNotice(btnId, btnType);
  };

  const favorite = true;

  return (
    <AnimalsBox>
      <AnimalsCategoryBox>
        <AnimalsFavoriteBox>
          <AnimalsFavoriteBtn
            type="button"
            id={id}
            onClick={handleClick}
            data-favorite="favorite"
          >
            <AnimalsFavorite
              style={favorite ? { fill: '#F59256' } : { fill: '#FFFFFF99' }}
            />
          </AnimalsFavoriteBtn>
        </AnimalsFavoriteBox>

        <AnimalsImg src={avatarURL} alt="Animal" />
        <AnimalsCategoryDiv>
          <AnimalsCategory>{category}</AnimalsCategory>
        </AnimalsCategoryDiv>
      </AnimalsCategoryBox>

      <AnimalsDiv>
        <Title>{title}</Title>

        <AnimalsUl>
          <AnimalsLi>
            <AnimalsSpanTitle>Breed:</AnimalsSpanTitle>
            <AnimalsSpan>{breed}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle>Place:</AnimalsSpanTitle>
            <AnimalsSpan>{location}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle> Age:</AnimalsSpanTitle>
            <AnimalsSpan>{helpers.getAge(birthday)}</AnimalsSpan>
          </AnimalsLi>
        </AnimalsUl>
      </AnimalsDiv>
      <AnimalsBtnMore>Learn more</AnimalsBtnMore>
      <AnimalsBtnDel>Delete</AnimalsBtnDel>
      {/* <ModalNotice /> */}
      <AnimalsBtnMore
        type="button"
        id={id}
        onClick={handleClick}
        data-modal="modal"
      >
        Learn more
      </AnimalsBtnMore>
      <AnimalsBtnDel
        type="button"
        id={id}
        onClick={handleClick}
        data-delete="delete"
      >
        Delete
      </AnimalsBtnDel>
      {favorite ? (
        <AnimalsBtnBox>
          <AnimalsBtn
            type="button"
            id={id}
            onClick={handleClick}
            data-modal="modal"
          >
            Learn more
          </AnimalsBtn>
          <AnimalsBtnDel
            type="button"
            id={id}
            onClick={handleClick}
            data-delete="delete"
          >
            Delete <AnimalsDeleteSvg />
          </AnimalsBtnDel>
        </AnimalsBtnBox>
      ) : (
        <AnimalsBtn
          type="button"
          id={id}
          onClick={handleClick}
          data-modal="modal"
          style={{ marginTop: '50px' }}
        >
          Learn more
        </AnimalsBtn>
      )}
    </AnimalsBox>
  );
}

export default NoticeCategoryItem;

//TODO прописати пропси.
