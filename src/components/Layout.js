import React from "react";
import { Route, Routes } from "react-router-dom";
import AcceptedPage from "../pages/Accepted";
import Home from "../pages/Home";
import RejectedPage from "../pages/Rejected";
import UserDetail from "../pages/User-detail";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/user/:id' element={<UserDetail/>} />
                <Route path='/rejected-users' element={<RejectedPage/>}/>
                <Route path="/accepted-users" element={<AcceptedPage/>}/>
            </Routes>
        </>
    )
}

export default Layout