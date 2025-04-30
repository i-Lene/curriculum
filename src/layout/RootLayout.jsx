import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import "./RootLayout.scss";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
