import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path="*" element={<Navigate to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;