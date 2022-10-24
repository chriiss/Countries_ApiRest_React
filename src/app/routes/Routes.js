import { Routes as WebRoutes, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import DetailsCountriesView from "../views/DetailCountriesView";

const Routes = () => (
    <WebRoutes>
        <Route path="/" element={<HomeView />} />
        <Route path="/:name" element={<DetailsCountriesView />} />
    </WebRoutes>
)

export default Routes