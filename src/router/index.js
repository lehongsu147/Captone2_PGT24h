import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home";
import Campaign from "../pages/Campaign";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PageKOLDetail from "../pages/Details/PageKolDetail/PageKolDetail";
import VerifyRegister from "../pages/VerifyRegister/VerifyRegister";
import ResetPassword from "../pages/ForgotPassword/ResetPassword";
import Chat from "../pages/Chat/Chat";
import Fields from "../pages/Fields/Fields";
import NotFound from "../pages/NotFound/NotFound";
import PageDetail from "../pages/Details/PageEntDetail/PageDetail";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import PaymentResult from "../pages/Payment/PaymentResult";
import BookingDetails from "../pages/Booking/BookingDetails";

import { ProtectedRoute } from "../context/ProtectedRoute.context";
import Footer from "../components/Footer/Footer";
import LayoutSideBar from "../Layout/LayoutSideBar/LayoutSideBar";
import LayoutHeader from "../Layout/LayoutOnlyHeader/LayoutHeader";
import ResgisterKol from "../pages/ResgisterKol/ResgisterKol";

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
          path="/field/:id" element={
            <LayoutSideBar>
              <Home />
            </LayoutSideBar>}
        />
        <Route
          path="kols/:id"
          element={
            <LayoutSideBar>
              <PageKOLDetail />
            </LayoutSideBar>}
        />
        <Route
          path="chat/:id"
          element={
            <LayoutHeader>
              <Chat />
            </LayoutHeader>}
        />
        <Route
          path="ents/:id"
          element=
          {
            <LayoutHeader>
              <ProtectedRoute Component={PageDetail} />
            </LayoutHeader>
          }
        />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify_account" element={<VerifyRegister />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reset_password" element={<ResetPassword />} />

        <Route
          path="/admin"
          element=<ProtectedRoute Component={HomeAdmin} />
        // element=<ProtectedRoute Component={HomeAdmin} role={"ADMIN"} />
        />
        <Route
          path="/setting"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="/bookings/:id"
          element={<ProtectedRoute Component={BookingDetails} />}
        />
        <Route
          path="/resigter-kol"
          element={<ProtectedRoute Component={ResgisterKol} />}
        />
        <Route
          path="/vnpay/return"
          element={<ProtectedRoute Component={PaymentResult} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
