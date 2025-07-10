import Header from "../src/components/Header";
import Body from "../src/components/Body";




export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


/**
 * HOW TO RENDER IN APP.JS
 * 
 import ReactDOM from "react-dom/client";
 import { AppLayout } from "./components/NamasteFood";
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
 * 
 */