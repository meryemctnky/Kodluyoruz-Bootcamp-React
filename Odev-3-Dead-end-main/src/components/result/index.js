import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/use-game';
import Results from '../results';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const { line1, line2, circleIcon } = svgs;

export default function Result() {

   const { result, setResult } = useGame();
   const { score, correctAnswers, wrongAnswers, results } = result;
   const navigate = useNavigate();

   const clickHandler = () => {
      setResult({ score: 0, correctAnswers: 0, wrongAnswers: 0, results: [] });
      navigate('/');
   };

   return (
      <div className='container-result'>
         <div className='section-left'>
            <h2>Sonuç</h2>
            <div className='result-line'>{line1}</div>
            <div className='scores'>
               <div>Puan: {score}</div>
               <div>Dogru Cevap: {correctAnswers}</div>
               <div>Yanlıs Cevap: {wrongAnswers}</div>
            </div>
            <div className='svg-button' onClick={clickHandler} >
               <span>Basa Dön</span>
               {circleIcon}
            </div>
         </div>
         <div className='section-right'>
            <h2>Sorular</h2>
            <div className='result-line'>{line2}</div>
            <ul>
               {results.map((question, index) => <Results key={`results-${index}`} question={question} />)}
            </ul>
         </div>
      </div>
   );
}