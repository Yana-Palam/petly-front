import {
  DelPetBox,
  DelPetBtn,
  AnimalsBtnDel,
  AnimalsDeleteSvg,
} from './DelNoticeItem.slyled';

function DelNoticeItem({ closeModal, id }) {
  return (
    <DelPetBox>
      <AnimalsBtnDel
        type="button"
        id={id}
        // onClick={}
        data-deleteid="deleteid"
      >
        Delete <AnimalsDeleteSvg />
      </AnimalsBtnDel>
      <DelPetBtn
        type="button"
        id={id}
        onClick={closeModal}
        data-cancel="cancel"
      >
        Cancel
      </DelPetBtn>
    </DelPetBox>
  );
}

export default DelNoticeItem;
