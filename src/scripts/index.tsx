import "core-js/shim";
import React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import routes from "./routes";

import "../styles/global.scss";

const mountElement = document.getElementById("app");

function renderRoot()
{
	render(
		process.env.NODE_ENV == "production"
			? routes
			: (
				<AppContainer>
					{routes}
				</AppContainer>
			),
		mountElement
	);
}

renderRoot();

// hot reloading in dev
if (module.hot)
{
	module.hot.accept("./routes", renderRoot);
}
