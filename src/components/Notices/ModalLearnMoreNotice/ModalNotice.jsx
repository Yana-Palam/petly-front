import Box from 'components/Common/Box';
// import Button from 'components/Common/Button';
// import ButtonIcon from 'components/Common/ButtonIcon';

import {
  ButtonIcon,
  ButtonIconBox,
  BoxModal,
  IconCloseModal,
  ModalTitle,
  ImageModal,
  CategoryTittle,
  CategoryTittleBox,
  ListInfo,
  ItemInfo,
  TextInfo,
  TextInfoTitle,
  TextTel,
  TextEmail,
  CommentsSpan,
  Comment,
  BtnBox,
  BtnTel,
  AnimalsFavoriteSvg,
  AnimalsBtnFavorite,
  AnimalsBtn,
} from './ModalNotice.styled';

const ModalNotice = ({ notices, closeModal }) => {
  const {
    _id,
    avatarURL,
    title,
    category,
    name,
    birthday,
    breed,
    location,
    sex,
    // email,
    phone,
    comments,
    // price,
  } = notices;

  const favorite = false;

  return (
    <Box position="relative">
      <ButtonIconBox>
        <ButtonIcon onClick={closeModal}>
          <IconCloseModal />
        </ButtonIcon>
      </ButtonIconBox>

      <BoxModal>
        <Box position="relative">
          <ImageModal src={avatarURL} alt={title} />
          <CategoryTittleBox>
            <CategoryTittle>{category}</CategoryTittle>
          </CategoryTittleBox>
        </Box>
        <Box>
          <ModalTitle>{title}</ModalTitle>
          <ListInfo>
            <ItemInfo key={'name'}>
              <TextInfoTitle>Name:</TextInfoTitle>
              <TextInfo>{name}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'birthday'}>
              <TextInfoTitle>Birthday:</TextInfoTitle>
              <TextInfo>{birthday}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'breed'}>
              <TextInfoTitle>Breed:</TextInfoTitle>
              <TextInfo>{breed}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'location'}>
              <TextInfoTitle>Location:</TextInfoTitle>
              <TextInfo>{location}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'sex'}>
              <TextInfoTitle>The sex:</TextInfoTitle>
              <TextInfo>{sex}</TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            <ItemInfo key={'email'}>
              <TextInfoTitle>Email:</TextInfoTitle>
              <TextInfo>
                <TextEmail email="testmaksym@ddd.ua">Email</TextEmail>
              </TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            <ItemInfo key={'phone'}>
              <TextInfoTitle>Phone:</TextInfoTitle>
              <TextInfo>
                <TextTel phone="+302101234567">Phone</TextTel>
              </TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            {category === 'sell' && (
              <ItemInfo key={'price'}>
                <TextInfoTitle>Price:</TextInfoTitle>
                <TextInfo>Price</TextInfo>
              </ItemInfo>
            )}
          </ListInfo>
        </Box>
      </BoxModal>

      <Comment>
        <CommentsSpan>Comments:</CommentsSpan>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam
        dolores dolor odit molestiae optio quisquam, quod laborum iste porro
        earum quos. Consequuntur iste laborum fugiat autem, dignissimos ex iure!{' '}
        {comments}
      </Comment>

      <BtnBox>
        <AnimalsBtnFavorite
          type="button"
          id={_id}
          // onClick={handleClick}
          data-delete="delete"
        >
          Add to
          <AnimalsFavoriteSvg
            style={favorite ? { fill: '#F59256' } : { fill: '#FFFFFF99' }}
          />
        </AnimalsBtnFavorite>
        <AnimalsBtn
          type="button"
          id={_id}
          // onClick={handleClick}
          data-modal="modal"
        >
          <BtnTel>Contact{phone}</BtnTel>
        </AnimalsBtn>

        {/* //TODO прописати телефон */}
      </BtnBox>
    </Box>
  );
};

export default ModalNotice;
