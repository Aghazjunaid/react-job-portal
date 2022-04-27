import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/User-detail";


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/user/:id' element={<UserDetail/>} />
            </Routes>
        </>
    )
}

export default Layout