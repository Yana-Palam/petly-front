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
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem(user) {
  console.log(user.title);
  const { img, title, other, category } = user;

  return (
    <AnimalsBox>
      <AnimalsImg src={img} alt="Animal" />
      <AnimalsCategoryDiv>
        <AnimalsCategory>{category}</AnimalsCategory>
      </AnimalsCategoryDiv>

      <AnimalsDiv>
        <Title>{title}</Title>

        <AnimalsUl>
          <AnimalsLi>
            <AnimalsSpanTitle>Breed:</AnimalsSpanTitle>
            <AnimalsSpan>{other.breed}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle>Place:</AnimalsSpanTitle>
            <AnimalsSpan>{other.place}</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle> Age:</AnimalsSpanTitle>
            <AnimalsSpan>{other.age}</AnimalsSpan>
          </AnimalsLi>
        </AnimalsUl>
      </AnimalsDiv>
      <AnimalsBtnMore>Learn more</AnimalsBtnMore>
      <AnimalsBtnDel>Delete</AnimalsBtnDel>
    </AnimalsBox>
  );
}

export default NoticeCategoryItem;
