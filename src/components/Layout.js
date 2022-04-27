import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import RejectedPage from "../pages/Rejected";
import UserDetail from "../pages/User-detail";


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/user/:id' element={<UserDetail/>} />
                <Route path='/rejected-users' element={<RejectedPage/>}/>
            </Routes>
        </>
    )
}

export default Layout