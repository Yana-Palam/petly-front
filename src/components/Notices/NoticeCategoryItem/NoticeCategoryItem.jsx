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

function NoticeCategoryItem() {
  return (
    <AnimalsBox>
      <AnimalsImg
        src="https://media.discordapp.net/attachments/992329082517868670/1055567899437301760/lions-gb1663d6f9_1280.jpg"
        alt="Animal"
      />
      <AnimalsCategoryDiv>
        <AnimalsCategory>In good hands</AnimalsCategory>
      </AnimalsCategoryDiv>

      <AnimalsDiv>
        <Title>Сute dog looking for a home</Title>
        <AnimalsUl>
          <AnimalsLi>
            <AnimalsSpanTitle>Breed:</AnimalsSpanTitle>
            <AnimalsSpan>Pomeranian</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle>Place:</AnimalsSpanTitle>
            <AnimalsSpan>Lviv</AnimalsSpan>
          </AnimalsLi>
          <AnimalsLi>
            <AnimalsSpanTitle> Age:</AnimalsSpanTitle>
            <AnimalsSpan>one year</AnimalsSpan>
          </AnimalsLi>
        </AnimalsUl>
      </AnimalsDiv>
      <AnimalsBtnMore>Learn more</AnimalsBtnMore>
      <AnimalsBtnDel>Delete</AnimalsBtnDel>
    </AnimalsBox>
  );
}

export default NoticeCategoryItem;
