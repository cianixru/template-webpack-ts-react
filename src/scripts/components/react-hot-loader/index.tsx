import React from "react";
import {AppContainer} from "react-hot-loader";

const ReactHotLoader: React.StatelessComponent<{}> = ({children}) => (
	process.env.NODE_ENV === "development"
		? (
			<AppContainer>
				{children}
			</AppContainer>
		)
		: React.Children.only(children)
);

export default ReactHotLoader
