import { useState } from 'react';
import { deleteBoard } from '../../../requests';
import { token } from '../../../config';
import { DeleteForever } from '@mui/icons-material';
import { ConfirmModal } from '../../ConfirmModal';
import { Board, BoardLink, DeleteBtn } from './styled';
import { useAppDispatch } from '../../../hooks';

export const BoardItem = ({ title, id }: { title: string; id: string }) => {
  const [isVisibleRemoveBtn, setIsVisibleRemoveBtn] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Board
      onMouseOver={() => setIsVisibleRemoveBtn(true)}
      onMouseOut={() => setIsVisibleRemoveBtn(false)}
    >
      <BoardLink to={'/board/' + id}>
        <span>{title}</span>
      </BoardLink>
      {isVisibleRemoveBtn && (
        <DeleteBtn size="small" onClick={() => setIsOpenConfirmModal(true)}>
          <DeleteForever fontSize="small" />
        </DeleteBtn>
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          isOpen={isOpenConfirmModal}
          handleSubmit={() => dispatch(deleteBoard({ token, id }))}
          alertText={`Do you really want to delete "${title}" board?`}
          closeModal={() => {
            setIsOpenConfirmModal(false);
            setIsVisibleRemoveBtn(false);
          }}
        />
      )}
    </Board>
  );
};
