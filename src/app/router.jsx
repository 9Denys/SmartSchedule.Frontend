import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import FindTeachers from "../pages/FindTeachers/FindTeachers";
import MyBookings from "../pages/MyBookings/MyBookings";
import TeacherDetails from "../pages/TeacherDetails/TeacherDetails";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/teachers" element={<FindTeachers />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;