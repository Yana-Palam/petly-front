import { helpers } from 'utils/helpers';

import {
  Title,
  AnimalsImg,
  AnimalsUl,
  AnimalsLi,
  AnimalsBtnMore,
  AnimalsDiv,
  AnimalsCategory,
  AnimalsBox,
  AnimalsCategoryDiv,
  AnimalsSpan,
  AnimalsSpanTitle,
  AnimalsBtnDel,
  AnimalsCategoryBox,
  AnimalsFavorite,
  AnimalsFavoriteBtn,
  AnimalsFavoriteBox,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  id,
  category,
  img,
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
              style={favorite ? { fill: 'black' } : { fill: 'tomato' }}
            />
          </AnimalsFavoriteBtn>
        </AnimalsFavoriteBox>

        <AnimalsImg src={img[0].photoURL} alt="Animal" />
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
    </AnimalsBox>
  );
}

export default NoticeCategoryItem;

//TODO прописати пропси.
