import React from 'react';
import { Button, Checkbox } from 'modules/shared';
import { ThemeContext } from 'providers/ThemeProvider';
import { ThemeProps } from 'types/frontend';
import getRoleColor from 'utils/factories/getRoleColor';

const HomePage: React.FC = () => {
  const { themeType, changeTheme } = React.useContext(ThemeContext) as ThemeProps;
  // useEffect(() => {
  //   // 👇️ set style on body element
  //   document.body.style.backgroundColor = colorMaps[themeType];
  // }, [themeType]);
  const roles = ['Pidor', 'Client', 'Adviser', 'Administrator', 'God'];

  return (
    <div className="homepage">
      <div className="tools">
        {roles.map((role, i) => (
          <Button
            className="client-button"
            style={{ backgroundColor: getRoleColor(i) }}
            title={role.toLowerCase()}
          >
            {role}
          </Button>
        ))}
      </div>
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

export default HomePage;
