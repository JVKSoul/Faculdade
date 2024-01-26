import { Outlet as OutletRouterDom } from "react-router-dom";
import { Header } from "../components/header";

export default () => {
  return (
    <>
      <Header />
      <OutletRouterDom />
      <Footer />
    </>
  );
};
