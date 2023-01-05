import React from 'react';
import * as svgs from '../../assets/svgs';

const { trueIcon } = svgs;

export default function Operation(props) {
   const { selected, label, onClick } = props;

   return (
      <div className='operation' onClick={onClick}>
         <div>{label}</div>
         <div>{selected && trueIcon}</div>
      </div>
   );
}
