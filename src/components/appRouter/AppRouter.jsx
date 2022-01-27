import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../../router/index.";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({component,path})=>
                <Route
                element={component} path={path}
                />
            )}
            {/*<Route path={'/about'} element={<About/>}/>
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/posts/:id'} element={<PostIdPage/>}/>*/}
            <Route path="*" element={<Navigate to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;