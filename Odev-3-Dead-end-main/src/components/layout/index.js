import React from 'react';
import { useGame } from '../../context/use-game';
import { STRINGS } from '../../assets/strings';
import './styles.scss';

const { LAYOUT, CORRECT, INCORRECT } = STRINGS;
const layout = { success: `${LAYOUT} ${CORRECT}`, fail: `${LAYOUT} ${INCORRECT}`, default: LAYOUT };

export default function Layout(props) {
   const { set } = useGame();

   return (
      <div className={set(layout)}>
         {props.children}
      </div>
   );
}
