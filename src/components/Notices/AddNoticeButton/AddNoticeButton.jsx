import useMatchMedia from 'hooks/useMatchMedia';
import { AddPetBox, AddPetBtn, AddPetSvg } from './AddNoticeButton.styled';

function AddNoticeButton() {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <AddPetBox>
        {!isMobile && <span>Add Pet </span>}
        <AddPetBtn>
          <AddPetSvg />
          {isMobile && <span>Add Pet </span>}
        </AddPetBtn>
      </AddPetBox>
    </>
  );
}

export default AddNoticeButton;
