// src/pages/Home.jsx
import React from 'react';
import { Slider } from '../components/Slider';

export const Home = () => (
    <div className="p-4 bg-slate-300">
        <h1 className="text-2xl">Bienvenido a la página de inicio</h1>
        <Slider />
    </div>
);
