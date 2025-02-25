import { type RouteConfig, index } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

const routes = await flatRoutes();
export default routes satisfies RouteConfig;
