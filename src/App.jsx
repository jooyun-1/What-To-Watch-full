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
import GenreSelection from "./pages/GenreSelection";
import SignupForm from "./pages/SignupForm";

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

          <Route path="/genreSelection" element={<GenreSelection />} />{/*선호 장르랑 회원가입 추가*/}
          <Route path="/SignupForm" element={<SignupForm />} />

        </Routes>
      </Router>
    </div>
  );
}
