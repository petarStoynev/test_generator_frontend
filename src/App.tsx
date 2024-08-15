import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { boolean } from "yup";
import "./App.css";
import { AddQuestionPage } from "./layouts/AddQuestionPage/AddQuestionPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { GeneratorPage } from "./layouts/GeneratorPage/GeneratorPage";
import { HomePage } from "./layouts/HomePage/HomePage";
import { LoginPage } from "./layouts/LoginPage/LoginPage";
import { Profile } from "./layouts/Profile/Profile";
import { QuestionPage } from "./layouts/QuestionsPage/QuestionPage";
import { RegisterPage } from "./layouts/RegisterPage/RegisterPage";
import { isLogged, parseJwt } from "./layouts/services/auth-service";
import { UserContext } from "./context/UserContext";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

export const App = () => {
  const [email, setEmail] = useState(() => {
    const token = localStorage.getItem("user");
    if (token) {
      const decodedToken = parseJwt(token);

      return decodedToken.sub;
    } else {
      return "";
    }
  });

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ email, setEmail }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/questions"
              element={<PrivateRoute component={QuestionPage} />}
            />
            <Route
              path="/add-question"
              element={<PrivateRoute component={AddQuestionPage} />}
            />
            <Route
              path="/generator"
              element={<PrivateRoute component={GeneratorPage} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

      {/* <HomePage/> */}
      {/* <QuestionPage/> */}
      {/* <AddQuestionPage/> */}
    </div>
  );
};
