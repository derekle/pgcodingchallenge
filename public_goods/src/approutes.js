import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home';

const AppRoutes = (props) => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='*'
                        element={
                            <Navigate
                                replace
                                to='/page-not-found'
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default AppRoutes;