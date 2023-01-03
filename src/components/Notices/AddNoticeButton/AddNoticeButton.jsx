import useMatchMedia from 'hooks/useMatchMedia';
import { AddPetBox, AddPetBtn, AddPetSvg } from './AddNoticeButton.styled';

function AddNoticeButton({ onBtnAddPetClick }) {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <AddPetBox>
        {!isMobile && <span>Add Pet </span>}
        <AddPetBtn onClick={onBtnAddPetClick} data-add="add">
          <AddPetSvg />
          {isMobile && <span>Add Pet </span>}
        </AddPetBtn>
      </AddPetBox>
    </>
  );
}

export default AddNoticeButton;
