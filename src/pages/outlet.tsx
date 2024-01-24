import { Outlet as OutletRouterDom } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default () => {
  return (
    <>
      <Header />
      <OutletRouterDom />
      <Footer />
    </>
  );
};
