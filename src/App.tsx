import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Outlet from './pages/outlet';
import Product from './pages/product';
// import Outlet from '@components/Outlet';
// import Home from '@pages/Home';


const App: React.FC = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Outlet/>} >
                        <Route index element={<Home />} />
                        <Route path="/product/:id" element={<Product/>} />
                    </Route>
                </Routes>
        </>
    );
};
export default App;