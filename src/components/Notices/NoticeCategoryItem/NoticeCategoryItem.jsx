import PropTypes from 'prop-types';
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
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem({
  category,
  photoURL,
  title,
  breed,
  location,
  birthday,
}) {
  return (
    <AnimalsBox>
      <AnimalsCategoryBox>
        <AnimalsImg src={photoURL} alt="Animal" />
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
    </AnimalsBox>
  );
}


NoticeCategoryItem.propTypes = {
  category: PropTypes.string,
  photoURL: PropTypes.string,
  title: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  // birthday: PropTypes.string,
  // birthday: PropTypes.number,
};

export default NoticeCategoryItem;

//TODO прописати пропси.

