import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/use-game';
import { shuffle } from '../../assets/functions';
import Choice from '../choice';

export default function Choices(props) {
   const { choices, isSelected, onClick } = props;
   const [indexes, setIndexes] = useState(shuffle());
   const { check } = useGame();

   useEffect(() => {
      setIndexes(shuffle());
   }, [choices]);

   return (
      <>
         {choices.map((choice, index) => {
            const isCorrect = check(index);
            return (
               <Choice
                  key={`choice-${index}`}
                  choice={choice}
                  index={indexes[index]}
                  selected={isSelected !== null ? isSelected === index : null}
                  correct={isCorrect}
                  onClick={() => onClick(isCorrect, choice, index)}
               />
            );
         }
         )}
      </>
   );
}
