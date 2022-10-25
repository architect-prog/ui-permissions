import React, { useCallback } from 'react';
import { routes } from 'appConstants';
import { useModal, useRoles } from 'hooks';
import { RoleProps } from 'types/frontend';
import { Button, ButtonContent, Description, Modal, NavigationButton, Title } from 'modules/shared';
import { AiFillWarning, AiOutlineClose } from 'react-icons/ai';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { toaster } from 'utils';

const Role: React.FC<RoleProps> = ({ id, name }) => {
  const { deleteRole } = useRoles();
  const [deleteModalVisible, openDeleteModal, closeDeleteModal] = useModal();

  const handleDelete = useCallback(async () => {
    if (await deleteRole(id)) {
      toaster.success('Role successfully deleted!');
    }
  }, [deleteRole, id]);

  return (
    <tr className="role">
      <td>{name}</td>
      <td>
        <NavigationButton className="button-warning" to={routes.dashboard.updateRole(id)}>
          <ButtonContent>
            Update role <RiEdit2Fill className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <Button className="button-danger ml-05" onClick={openDeleteModal}>
          <ButtonContent>
            Delete role <RiDeleteBin2Fill className="icon ml-03" />
          </ButtonContent>
        </Button>

        <Modal visible={deleteModalVisible} close={closeDeleteModal}>
          <Title className="modal-title title-danger">
            <AiFillWarning className="icon-lg mr-03" />
            Attention!!!
          </Title>
          <Description>Do you really want to remove the role? Changes cannot be rollback!</Description>
          <Button className="button-primary" onClick={closeDeleteModal}>
            <ButtonContent>
              Close <AiOutlineClose className="icon ml-03" />
            </ButtonContent>
          </Button>
          <Button className="button-danger ml-03" onClick={handleDelete}>
            <ButtonContent>
              Delete role <RiDeleteBin2Fill className="icon ml-03" />
            </ButtonContent>
          </Button>
        </Modal>
      </td>
    </tr>
  );
};

export default Role;
