import { FC, ReactNode } from "react";
import "./LayoutSite.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
interface ILayoutSite {
  children: ReactNode;
}
const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  return (
    <div id="LayoutSite">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
