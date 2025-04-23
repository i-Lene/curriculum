import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
