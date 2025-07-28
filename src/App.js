import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { AppLayout } from "../components/NamasteFood";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet  />
    </div>
  );
};  

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
        errorElement:<Error/>
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },

  {
    path: "*",
    element: <NotFound />, // your custom 404 component
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
