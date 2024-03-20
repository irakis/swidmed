import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { MainLayout } from './modules/layout/layout';
import './App.css';
import { Home } from './modules/layout/home/home';
import { Endoscope } from './modules/endoscope/endoscope';
import { Form } from './modules/form/form';

export const App: FC =()=> (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/endoscope_clinic" element={<Endoscope/>} />
        <Route path="/form" element={<Form/>} />
      </Route>
    </Routes>
)

export default App
