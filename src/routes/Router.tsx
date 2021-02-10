import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

export const Router = (): JSX.Element => (
    <Switch>
        {routes.map((route, index) =>
            (<Route key={`${route}_${index}`} path={route.path} component={route.component} />))}
    </Switch>
);