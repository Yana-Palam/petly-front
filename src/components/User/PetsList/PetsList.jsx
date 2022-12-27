import { useDispatch, useSelector } from 'react-redux';
import {
  UlWrap, LiItem, Text, UlList, LiWrap, Img, LiWrapComment, Button, Span, ImgDelete,
} from './PatsList.styled';
import deleteIcon from 'assets/icons/delete.svg';
import { deletePet } from '../../../redux/userData/userDataOperation';

function PetsList() {
const dispatch = useDispatch();
const pets = useSelector((state) => state.userData.data.myPets)

  const onDeleteHandler = (petId) => () => {
      dispatch(deletePet(petId));
  };

  if (!pets.length) return null;

  return (
      <UlList>
        {
          pets.map((pet) => (
            <LiItem key={pet.petId}>
              <Img src={pet.avatarURL} alt='cat' />
              <UlWrap>
                <LiWrap>
                  <Text> <Span>Name:</Span> {pet.name}</Text>
                </LiWrap>
                <LiWrap>
                  <Text><Span>Date of birth:</Span> {pet.birthday}</Text>
                </LiWrap>
                <LiWrap>
                  <Text><Span>Breed:</Span> {pet.breed}</Text>
                </LiWrap>
                <LiWrapComment>
                  <Text><Span>Comments:</Span>{pet.comments}</Text>
                </LiWrapComment>
              </UlWrap>
              <Button onClick={onDeleteHandler(pet.petId)}> <ImgDelete src={deleteIcon} alt='' /></Button>
            </LiItem>
          ))
        }
      </UlList>
  );
}

export default PetsList;
