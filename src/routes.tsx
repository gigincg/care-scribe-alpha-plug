import ScribeHome from "./components/ScribeHome";

const routes: Record<string, () => JSX.Element> = {
  "/scribe": () => <ScribeHome />,
};

export default routes;
