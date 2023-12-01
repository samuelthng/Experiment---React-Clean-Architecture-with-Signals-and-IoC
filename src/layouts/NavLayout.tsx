import { Link, Outlet } from "react-router-dom";
import router from "../router";

export default function NavLayout({ routes = router.routes[0].children }) {
  return (
    <>
      <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {routes
          .filter((route) => route.path)
          .map((route, i) => (
            <Link key={`${i}-${route.path}`} to={route.path}>
              {route.path}
            </Link>
          ))}
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
