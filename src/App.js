import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { AppLayout } from "../components/NamasteFood";
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import LoggedInContext from "./utils/LoggedInContext";

const Grocery = lazy(() => import("./components/Grocery"));
export const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Harshita Adya",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <LoggedInContext.Provider value={{ isLoggedIn: true }}>
          <Header />
        </LoggedInContext.Provider>
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />, // your custom 404 component
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
