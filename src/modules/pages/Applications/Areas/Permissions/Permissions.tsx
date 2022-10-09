import { Button, Checkbox } from 'modules/shared';
import React from 'react';

const Permissions: React.FC = () => {
  return (
    <div className="permissions">
      <section className="permissions-section">
        <form className="permissions-form">
          <h1 className="permissions-form-header-label">Permissions:</h1>
          <hr />
          <Checkbox value={false} label={'ui-permission.canCreate'} />
          <Checkbox value={false} label={'ui-permission.canRead'} />
          <Checkbox value={true} label={'ui-permission.canUpdate'} />
          <Checkbox value={false} label={'ui-permission.canDelete'} />
          <hr />
          <Button className="permissions-save-changes-button" type="submit">
            Save changes
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Permissions;
