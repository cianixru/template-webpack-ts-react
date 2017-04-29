import React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {translate, TranslationFunction} from "react-i18next";

import style from "./style.scss";

@translate("home")
export default class Home extends React.Component<OwnProps, any> {
	render() {
		const {t} = this.props;

		return (
			<section className={style.container}>
				<h1>{t("title")}</h1>
				<div>
					<Link to="/counter">{t("navigationCounter")}</Link>
				</div>
			</section>
		);
	}
}

interface OwnProps extends RouteComponentProps<any> {
	t: TranslationFunction;
}
