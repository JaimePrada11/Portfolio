import React from 'react';
import vision from '../../assets/vision.jpg';
import mision from '../../assets/mision.jpg';
import valores from '../../assets/valores.jpg';
import { values, mission, vission } from '../../local/Info';

const MoreInformation = () => {
    return (
        <div className="grid gap-4 p-8 md:grid-cols-5 md:grid-rows-3">
            <div 
                className="bg-cover bg-center shadow-lg relative flex items-center justify-center rounded-lg md:col-span-2 md:row-start-1"
                style={{ backgroundImage: `url(${mision})` }}
            />

            <div className="flex flex-col justify-center bg-gray-800/50 p-6 rounded-lg shadow-lg text-white md:col-start-3 md:row-start-1 md:col-span-2">
                <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">Misión</h2>
                <p className="text-sm text-center lg:text-left">{mission}</p>
            </div>

            <div 
                className="bg-cover bg-center shadow-lg relative flex items-center justify-center rounded-lg md:col-span-2 md:col-start-4 md:row-start-2"
                style={{ backgroundImage: `url(${vision})` }}
            />

            <div className="flex flex-col justify-center bg-gray-800/50 p-6 rounded-lg shadow-lg text-white md:col-start-2 md:col-span-2 md:row-start-2">
                <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">Visión</h2>
                <p className="text-sm text-center lg:text-left">{vission}</p>
            </div>

            <div 
                className="bg-cover bg-center shadow-lg relative flex items-center justify-center rounded-lg md:col-span-2 md:col-start-1 md:row-start-3"
                style={{ backgroundImage: `url(${valores})` }}
            />

            <div className="flex flex-col justify-center bg-gray-800/50 p-6 rounded-lg shadow-lg text-white md:col-span-2 md:col-start-3 md:row-start-3">
                <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">Valores</h2>
                <ul className="text-sm text-center lg:text-left">
                    {Array.isArray(values) ? (
                        values.map((value, index) => (
                            <li key={index} className="mb-2">• {value}</li>
                        ))
                    ) : (
                        <p>{values}</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MoreInformation;
