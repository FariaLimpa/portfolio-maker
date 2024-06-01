import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../css/globals.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 1000,
          top: 0,
          left: 0,
          opacity: 0.5 /* in FireFox */,
          filter: "alpha(opacity=50)" /* in IE */,
        }}
      />
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        {children}
      </main>
    </div>
  );
}
