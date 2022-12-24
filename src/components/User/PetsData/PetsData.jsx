import PetsList from '../PetsList';
// import ModalAddsPet from '../ModalAddsPet';

import { Button, DivWrap, DivWrapperMain, ImgAdd, DivBtn, Title } from './PatsData.styled';
import addIcon from 'assets/icons/plus.svg';

function PetsData() {
  return (
      <DivWrapperMain>
        <DivWrap>
          <Title>My pets:</Title>
          <DivBtn>
            Add pet
            <Button> <ImgAdd src={addIcon} alt='' /></Button>
          </DivBtn>
        </DivWrap>
        {/*<ModalAddsPet/>*/}
        <PetsList />
      </DivWrapperMain>
  );
}

export default PetsData;
