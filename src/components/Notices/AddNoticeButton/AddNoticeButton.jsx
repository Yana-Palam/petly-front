import useMatchMedia from 'hooks/useMatchMedia';
import { AddPetBox, AddPetBtn, AddPetSvg } from './AddNoticeButton.styled';

function AddNoticeButton({ getBtnInfo }) {
  const { isMobile } = useMatchMedia();
  const handleModal = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    getBtnInfo(btnId, btnType);
  };
  return (
    <>
      <AddPetBox>
        {!isMobile && <span>Add Pet </span>}
        <AddPetBtn onClick={handleModal} data-add="add">
          <AddPetSvg />
          {isMobile && <span>Add Pet </span>}
        </AddPetBtn>
      </AddPetBox>
    </>
  );
}

export default AddNoticeButton;
