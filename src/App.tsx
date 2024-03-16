import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from './modules/layout/layout';
import './App.css';
import { Home } from './modules/layout/home/home';

export const App: FC =()=> (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />

      </Route>
    </Routes>
)

export default App
