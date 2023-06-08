import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useState } from "react";
import Recommendation from "./pages/Recommendation";
import Top20 from "./pages/Top20";
import Notice from "./pages/Notice";
import MyPage from "./pages/MyPage";
import Categories from "./pages/Categories";
import PasswordChangePage from "./pages/PasswordChangePage";
import EditProfile from "./pages/EditProfile";
import Withdrawal from "./pages/Withdrawal";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/Top20" element={<Top20 />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/password-change" element={<PasswordChangePage />} />
          <Route path="/profileEdit" element={<EditProfile />} />
          <Route path="/membership-withdrawal" element={<Withdrawal />} />

        </Routes>
      </Router>
    </div>
  );
}
