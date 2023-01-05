import { Routes, Route } from 'react-router-dom';
import GameProvider from './context/use-game';
import Layout from './components/layout';
import HomePage from './pages/home';
import RoundPage from './pages/round';
import ResultPage from './pages/result';

export default function App() {
   return (
      <GameProvider>
         <Layout>
            <Routes>
               <Route path='/' exact element={<HomePage />} />
               <Route path='/round' element={<RoundPage />} />
               <Route path='/result' element={<ResultPage />} />
            </Routes>
         </Layout>
      </GameProvider>
   );
}