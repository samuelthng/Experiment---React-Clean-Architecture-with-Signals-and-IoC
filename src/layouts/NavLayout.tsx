import { Link, Outlet, useLocation } from "react-router-dom";
import router from "../router";

export default function NavLayout({ routes = router.routes[0].children }) {
  const location = useLocation();
  return (
    <>
     <div style={{ display: "flex", padding: "1rem", justifyContent: "center" }}><code>Note: render count increments more than once each render due to StrictMode. Also, UI dev != UI designer. 😅</code></div>
      <nav style={{ display: "flex", padding: "1rem", gap: ".75rem 2rem", justifyContent: "center", flexWrap: "wrap" }}>
        {routes
          .filter((route) => route.path)
          .map((route, i) => {
            console.log({ route, location })
            const isCurrent = location.pathname === `/${route.path}`;
            return (
            <Link key={`${i}-${route.path}`} to={route.path} style={{
              fontWeight: isCurrent ? "bold" : "normal",
              textDecoration: isCurrent ? "none" : "underline",
              border: isCurrent ? "1px solid black" : "none",
              padding: '0.25rem'
            }}>
              {route.path}
            </Link>
          )
          })}
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
