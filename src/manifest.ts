import NavItems, { INavItems } from "./components/NavItems";

import routes from "./routes";

type Manifest = {
  routes: Record<string, () => JSX.Element>;
  navItems: INavItems[];
};

const manifest: Manifest = {
  routes,
  navItems: NavItems,
};

export default manifest;
