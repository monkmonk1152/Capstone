import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import About from "../pages/About";


interface RouteType {
    path:string,
    component: () => JSX.Element,
    name:string,
}

const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: DashBoard,
      name: "Dashboard",
    },
    {
      path:"/about",
      component: About,
      name: "About",
    },
  ];

  export default routes