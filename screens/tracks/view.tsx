import React from 'react';

import { Tabs } from '../../ui-kit';
import { MainLayout } from '../../layouts';
import s from './styles.module.scss';

const View: React.FC = () => {
  return (
    <MainLayout>
      <div className={s.container}>
        <Tabs
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    </MainLayout>
  );
};

export default View;
