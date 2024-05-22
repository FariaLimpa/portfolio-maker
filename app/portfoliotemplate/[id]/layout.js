import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../css/globals.scss";
import "../../css/globals.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "Portfolio of Abu Said - Software Developer",
  description:
    "This is the portfolio of Abu Said. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function Layout({ children }) {
  return (
    <div>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
}
