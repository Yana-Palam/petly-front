import Box from 'components/Common/Box';
import Button from 'components/Common/Button';
import ButtonIcon from 'components/Common/ButtonIcon';

import {
  IconCloseModal,
  ModalTitle,
  ImageModal,
  CategoryTittle,
  ListInfo,
  ItemInfo,
  TextInfo,
  TextTel,
  TextEmail,
  CommentsSpan,
  Comment,
  BtnTel,
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
    // phone,
    comments,
    // price,
  } = notices;

  return (
    <>
      <ButtonIcon onClick={closeModal}>
        <IconCloseModal />
      </ButtonIcon>

      <Box>
        <ImageModal src={avatarURL} alt={title} />
        <Box>
          <CategoryTittle>{category}</CategoryTittle>
        </Box>
      </Box>

      <Box>
        <ModalTitle>{title}</ModalTitle>
        <ListInfo>
          <ItemInfo key={'name'}>
            <TextInfo>Name:</TextInfo>
            <TextInfo>{name}</TextInfo>
          </ItemInfo>
          <ItemInfo key={'birthday'}>
            <TextInfo>Birthday:</TextInfo>
            <TextInfo>{birthday}</TextInfo>
          </ItemInfo>
          <ItemInfo key={'breed'}>
            <TextInfo>Breed:</TextInfo>
            <TextInfo>{breed}</TextInfo>
          </ItemInfo>
          <ItemInfo key={'location'}>
            <TextInfo>Location:</TextInfo>
            <TextInfo>{location}</TextInfo>
          </ItemInfo>
          <ItemInfo key={'sex'}>
            <TextInfo>The sex:</TextInfo>
            <TextInfo>{sex}</TextInfo>
          </ItemInfo>

          {/* //TODO деструктуризувати пропс */}
          <ItemInfo key={'email'}>
            <TextInfo>Email:</TextInfo>
            <TextInfo>
              <TextEmail email="testmaksym@ddd.ua">Email</TextEmail>
            </TextInfo>
          </ItemInfo>

          {/* //TODO деструктуризувати пропс */}
          <ItemInfo key={'phone'}>
            <TextInfo>Phone:</TextInfo>
            <TextInfo>
              <TextTel phone="+302101234567">Phone</TextTel>
            </TextInfo>
          </ItemInfo>

          {/* //TODO деструктуризувати пропс */}
          {category === 'sell' && (
            <ItemInfo key={'price'}>
              <TextInfo>Price:</TextInfo>
              <TextInfo>Price</TextInfo>
            </ItemInfo>
          )}
        </ListInfo>
      </Box>

      <Box>
        <CommentsSpan>Comments:</CommentsSpan>
        <Comment> {comments}</Comment>
      </Box>

      <Box>
        <Button id={_id} data-modal="modal">
          addFavorite
        </Button>
        {/* //TODO прописати телефон */}
        <BtnTel phone="+302101234567">Contact</BtnTel>
      </Box>
    </>
  );
};

export default ModalNotice;
