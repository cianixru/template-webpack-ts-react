import React from "react";
import {Route} from "react-router";
import Loadable from "loadable";

import style from "./style.scss";
import Home from "pages/home";

export default class App extends React.Component<any, any> {
	render() {
		return (
			<main className={style.container}>
				<Route exact path="/" component={Home} />
				<Route exact path="/counter" component={Loadable(() => System.import("pages/counter"))} />
			</main>
		);
	}
}
