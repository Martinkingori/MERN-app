import React from "react";
import Admin from "../admin/Admin";
import Home from "../../stateful/home/Home";
import { Routes, Route } from "react-router-dom";
export default function Site(){
    return(
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin />}/>
       </Routes>
    </div>
    )
}