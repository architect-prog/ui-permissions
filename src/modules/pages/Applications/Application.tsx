import React, { useCallback } from 'react';
import { routes } from 'appConstants';
import { useApplications, useModal } from 'hooks';
import { NavLink } from 'react-router-dom';
import { IoLayers } from 'react-icons/io5';
import { ApplicationProps } from 'types/frontend';
import { Button, ButtonContent, Description, Modal, NavigationButton, Title } from 'modules/shared';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillWarning, AiOutlineClose } from 'react-icons/ai';
import { toaster } from 'utils';

const Application: React.FC<ApplicationProps> = ({ id, name, description }) => {
  const { deleteApplication } = useApplications();
  const [deleteModalVisible, openDeleteModal, closeDeleteModal] = useModal();

  const handleDelete = useCallback(async () => {
    if (await deleteApplication(id)) {
      toaster.success('Application successfully deleted!');
    }
  }, [deleteApplication, id]);

  return (
    <div className="application">
      <div className="card">
        <div className="card-body">
          <NavLink to={routes.dashboard.areas(id)}>
            <Title className="card-title">{name}</Title>
          </NavLink>
          <Description className="card-description">{description}</Description>
        </div>

        <div className="card-footer">
          <NavigationButton className="button-primary" to={routes.dashboard.areas(id)}>
            <IoLayers className="icon" />
          </NavigationButton>
          <NavigationButton className="button-warning ml-05" to={routes.dashboard.updateApplication(id)}>
            <RiEdit2Fill className="icon" />
          </NavigationButton>
          <Button className="button-danger ml-05" onClick={openDeleteModal}>
            <RiDeleteBin2Fill className="icon" />
          </Button>
        </div>

        <Modal visible={deleteModalVisible} close={closeDeleteModal}>
          <Title className="modal-title title-danger">
            <AiFillWarning className="icon-lg mr-03" />
            Attention!!!
          </Title>
          <Description>Do you really want to remove the application? Changes cannot be rollback!</Description>
          <Button className="button-primary" onClick={closeDeleteModal}>
            <ButtonContent>
              Close <AiOutlineClose className="icon ml-03" />
            </ButtonContent>
          </Button>
          <Button className="button-danger ml-03" onClick={handleDelete}>
            <ButtonContent>
              Delete application <RiDeleteBin2Fill className="icon ml-03" />
            </ButtonContent>
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Application;
