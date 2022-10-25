import React, { useCallback } from 'react';
import { routes } from 'appConstants';
import { Link } from 'react-router-dom';
import { AreaProps } from 'types/frontend';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { FaShieldAlt } from 'react-icons/fa';
import { useAreas, useModal } from 'hooks';
import { AiFillWarning, AiOutlineClose } from 'react-icons/ai';
import { toaster } from 'utils';
import { Button, ButtonContent, Description, Modal, NavigationButton, Title } from 'modules/shared';

const Area: React.FC<AreaProps> = ({ id, applicationId, name }) => {
  const { deleteArea } = useAreas(applicationId);
  const [deleteModalVisible, openDeleteModal, closeDeleteModal] = useModal();

  const handleDelete = useCallback(async () => {
    if (await deleteArea(id)) {
      toaster.success('Area successfully deleted!');
    }
  }, [deleteArea, id]);

  return (
    <tr className="area">
      <td>
        <Link to={routes.dashboard.area(applicationId, id)}>{name}</Link>
      </td>
      <td>
        <NavigationButton className="button-primary" to={routes.dashboard.area(applicationId, id)}>
          <ButtonContent>
            Details <FaShieldAlt className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <NavigationButton className="button-warning ml-05" to={routes.dashboard.updateArea(applicationId, id)}>
          <ButtonContent>
            Update area <RiEdit2Fill className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <Button className="button-danger ml-05" onClick={openDeleteModal}>
          <ButtonContent>
            Delete area <RiDeleteBin2Fill className="icon ml-03" />
          </ButtonContent>
        </Button>

        <Modal visible={deleteModalVisible} close={closeDeleteModal}>
          <Title className="modal-title title-danger">
            <AiFillWarning className="icon-lg mr-03" />
            Attention!!!
          </Title>
          <Description>Do you really want to remove the area? Changes cannot be rollback!</Description>
          <Button className="button-primary" onClick={closeDeleteModal}>
            <ButtonContent>
              Close <AiOutlineClose className="icon ml-03" />
            </ButtonContent>
          </Button>
          <Button className="button-danger ml-03" onClick={handleDelete}>
            <ButtonContent>
              Delete area <RiDeleteBin2Fill className="icon ml-03" />
            </ButtonContent>
          </Button>
        </Modal>
      </td>
    </tr>
  );
};

export default Area;
