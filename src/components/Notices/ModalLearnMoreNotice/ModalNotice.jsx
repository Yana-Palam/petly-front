import { helpers } from 'utils/helpers';

import Box from 'components/Common/Box';
// import Button from 'components/Common/Button';
// import ButtonIcon from 'components/Common/ButtonIcon';
import { useDispatch } from 'react-redux';
import { changeFavorite } from 'redux/notice/noticeSlice';
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

const ModalNotice = ({ notices, closeModal, getBtnInfo }) => {
  const noItem = '-------------';

  const {
    _id,
    avatarURL,
    favorite,
    title,
    category,
    name,
    birthday,
    breed,
    location,
    sex,
    email,
    phone,
    comments,
    price,
  } = notices;

  const dispatch = useDispatch();
  const getNotice = e => {
    dispatch(changeFavorite(e.currentTarget.id));
  };

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
          <ModalTitle>{title || noItem}</ModalTitle>
          <ListInfo>
            <ItemInfo key={'name'}>
              <TextInfoTitle>Name:</TextInfoTitle>
              <TextInfo>{name || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'birthday'}>
              <TextInfoTitle>Birthday:</TextInfoTitle>
              <TextInfo> {helpers.getAge(birthday)}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'breed'}>
              <TextInfoTitle>Breed:</TextInfoTitle>
              <TextInfo>{breed || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'location'}>
              <TextInfoTitle>Location:</TextInfoTitle>
              <TextInfo>{location || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'sex'}>
              <TextInfoTitle>The sex:</TextInfoTitle>
              <TextInfo>{sex || noItem}</TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            <ItemInfo key={'email'}>
              <TextInfoTitle>Email:</TextInfoTitle>
              <TextInfo>
                <TextEmail email={email}>Email</TextEmail>
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
                <TextInfo>{price || noItem}</TextInfo>
              </ItemInfo>
            )}
          </ListInfo>
        </Box>
      </BoxModal>

      <Comment>
        <CommentsSpan>Comments:</CommentsSpan>
        {comments || noItem}
      </Comment>

      <BtnBox>
        <AnimalsBtnFavorite
          type="button"
          id={_id}
          onClick={getNotice}
          data-favorite="favorite"
        >
          Add to
          <AnimalsFavoriteSvg
            style={favorite ? { fill: '#F59256' } : { fill: '#FFFFFF99' }}
          />
        </AnimalsBtnFavorite>
        <AnimalsBtn
        // type="button"
        // id={_id}
        // onClick={handleClick}
        // data-modal="modal"
        >
          <BtnTel>Contact{phone}</BtnTel>
        </AnimalsBtn>

        {/* //TODO прописати телефон */}
      </BtnBox>
    </Box>
  );
};

export default ModalNotice;
