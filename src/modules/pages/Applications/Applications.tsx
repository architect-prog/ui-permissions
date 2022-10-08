import React from 'react';
import { useRecoilState } from 'recoil';
import { applicationsAtom } from 'store/recoil/atoms';
import Application from './Application';

const Applications: React.FC = () => {
  const [applications, setApplications] = useRecoilState(applicationsAtom);
  return (
    <div className="applications">
      {applications.items.map((t) => (
        <>
          <Application
            key={`application-${t.id}`}
            description={t.description}
            name={t.name}
            id={t.id}
          />
          <Application
            key={`application-${t.id}`}
            description={t.description}
            name={t.name}
            id={t.id}
          />
          <Application
            key={`application-${t.id}`}
            description={t.description}
            name={t.name}
            id={t.id}
          />
          <Application
            key={`application-${t.id}`}
            description={t.description}
            name={t.name}
            id={t.id}
          />
        </>
      ))}
    </div>
  );
};

export default Applications;
