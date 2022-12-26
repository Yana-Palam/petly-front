// import { useDispatch } from 'react-redux';
import {
  UlWrap,
  LiItem,
  Text,
  UlList,
  LiWrap,
  Img,
  LiWrapComment,
  Button,
  Span,
  ImgDelete,
} from './PatsList.styled';
import deleteIcon from 'assets/icons/delete.svg';

function PetsList() {
// const dispatch = useDispatch();

const onDeleteHandler = () => {
  console.log('delete');
}

  return (
      <UlList>
        <LiItem>
          <Img src='https://images.news18.com/ibnlive/uploads/2022/07/cats-2.png' alt='cat' />
          <UlWrap>
            <LiWrap>
              <Text> <Span>Name:</Span> Jack</Text>
            </LiWrap>
            <LiWrap>
              <Text><Span>Date of birth:</Span> 22.04.2018</Text>
            </LiWrap>
            <LiWrap>
              <Text><Span>Breed:</Span> Persian cat</Text>
            </LiWrap>
            <LiWrapComment>
              <Text><Span>Comments:</Span> Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</Text>
            </LiWrapComment>
          </UlWrap>
          <Button onClick={onDeleteHandler}> <ImgDelete src={deleteIcon} alt='' /></Button>
        </LiItem>
      </UlList>
  );
}

export default PetsList;
