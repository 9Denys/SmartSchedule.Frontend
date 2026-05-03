import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import FindTeachers from "../pages/FindTeachers/FindTeachers";
import MyBookings from "../pages/MyBookings/MyBookings";
import TeacherDetails from "../pages/TeacherDetails/TeacherDetails";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";
import TeacherSchedule from "../pages/TeacherSchedule/TeacherSchedule";
import TeacherBookings from "../pages/TeacherBookings/TeacherBookings";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminSystemControl from "../pages/AdminSystemControl/AdminSystemControl";
import AdminUserManagement from "../pages/AdminUserManagement/AdminUserManagement";

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
        <Route path="/teacher/schedule" element={<TeacherSchedule />} />
        <Route path="/teacher/bookings" element={<TeacherBookings />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/system" element={<AdminSystemControl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;