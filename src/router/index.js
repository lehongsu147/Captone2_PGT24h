import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ForgotPassword/ResetPassword";
import Chat from "../pages/Chat/Chat";
import NotFound from "../pages/NotFound/NotFound";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import PaymentResult from "../pages/Payment/PaymentResult";
import BookingDetails from "../pages/Booking/BookingDetails";
import { ProtectedRoute } from "../context/ProtectedRoute.context";
import LayoutSideBar from "../Layout/LayoutSideBar/LayoutSideBar";
import LayoutHeader from "../Layout/LayoutOnlyHeader/LayoutHeader";
import ResgisterPgt from "../pages/ResgisterKol/ResgisterPgt";
import ProfileUser from "../pages/Details/PageEntDetail/Introduce/ProfileUser";
import TrendingPage from "../pages/Trending/TrendingPage";
import SearchPgt from "../pages/SearchPgt/SearchPgt";
import PagePgtDetail from "../pages/Details/PageKolDetail/PagePgtDetail";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={
            <LayoutSideBar>
              <Home />
            </LayoutSideBar>}
        />
        <Route
          path="/home" element={
            <LayoutSideBar>
              <Home />
            </LayoutSideBar>}
        />
        <Route
          path="/pgt" element={
            <LayoutSideBar>
              <SearchPgt />
            </LayoutSideBar>}
        />
        <Route
          path="/field/:id" element={
            <LayoutSideBar>
              <Home />
            </LayoutSideBar>}
        />
        <Route
          path="pgt/:id"
          element={
            <LayoutSideBar>
              <PagePgtDetail />
            </LayoutSideBar>}
        />
        <Route
          path="/trending"
          element={
            <LayoutSideBar>
              <TrendingPage />
            </LayoutSideBar>}
        />
        <Route
          path="registet-pgt"
          element={
            <LayoutHeader>
              <ProtectedRoute Component={ResgisterPgt} />
            </LayoutHeader>}
        />
        <Route
          path="user-home"
          element={
            <LayoutSideBar>
              <ProfileUser />
            </LayoutSideBar>}
        />
        <Route
          path="chat"
          element={
            <LayoutHeader>
              <ProtectedRoute Component={Chat} />
            </LayoutHeader>}
        />
      
        <Route
          path="/setting"
          element={
            <LayoutHeader>
              <ProtectedRoute Component={Profile} />
            </LayoutHeader>}
        />
        <Route
          path="/vnpay/return"
          element={<LayoutHeader>
            <ProtectedRoute Component={PaymentResult} />
          </LayoutHeader>}
        />
        <Route
          path="/bookings/:id"
          element={<ProtectedRoute Component={BookingDetails} />}
        />
        <Route
          path="/resigter-kol"
          element={<ProtectedRoute Component={ResgisterPgt} />}
        />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route
          path="/admin"
          element=<ProtectedRoute Component={HomeAdmin} role={"ADMIN"} />
        />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
