import React from 'react';

import { Dropdown, Avatar } from '../../ui-kit';
import { menuItems } from '../../constants';
import s from './styles.module.scss';

const View: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Avatar
          src={
            'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
          }
        />
      </div>
      <Dropdown name={'ant.goncharik@gmail.com'} list={menuItems} />
    </div>
  );
};

export default View;