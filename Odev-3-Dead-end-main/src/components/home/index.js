import React, { useState } from 'react';
import { createQuestions } from '../../assets/functions';
import { useNavigate } from 'react-router-dom';
import { STRINGS } from '../../assets/strings';
import { useGame } from '../../context/use-game';
import Operation from '../operation';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { ADDITION, SUBSTRACTION, MULTIPLICATION, DIVISION } = STRINGS;

const { homeLine, footerCircle } = svgs;

const operations = [
   { type: ADDITION, label: 'Toplama' },
   { type: SUBSTRACTION, label: 'Çıkarma' },
   { type: MULTIPLICATION, label: 'Çarpma' },
   { type: DIVISION, label: 'Bölme' },
];

export default function Home() {
   const [operation, setOperation] = useState(null);
   const { totals, setRound } = useGame();
   const navigate = useNavigate();
   const [selectedIndex, setSelectedIndex] = useState(null);

   const { score, correctAnswers, wrongAnswers, questionsSolved } = totals;

   function clickHandler() {
      if (operation) {
         const questions = createQuestions(operation);

         setRound(({ no }) => {
            return { no: no + 1, score: 0, questions: questions };
         });

         navigate('/round');
      }
   }

   function onOperationSelect(type, index) {
      setOperation(type);
      setSelectedIndex(index);
   }

   return (
      <div className='container'>
         <div className='header'>Matematik Oyunu</div>
         <div className='line'>{homeLine}</div>
         <div className='main'>
            <section>
               <div>Puan: {score}</div>
               <div><p>Çözülen Sayısı</p><p>: {questionsSolved}</p></div>
               <div>Yanlıs Cevap: {wrongAnswers}</div>
               <div><p>Dogru Cevap</p><p>: {correctAnswers}</p></div>
            </section>
            <section>
               {operations.map((item, index) =>
                  <Operation
                     key={`operation-${index}`}
                     selected={index === selectedIndex}
                     label={item.label}
                     onClick={() => onOperationSelect(item.type, index)}
                  />
               )}
            </section>
         </div>
         <div className='start' onClick={clickHandler}>
            {footerCircle}
            <p>Basla</p>
         </div>
      </div>
   );
}
