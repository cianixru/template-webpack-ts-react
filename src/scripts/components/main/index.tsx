import React from "react";
import {observer} from "mobx-react";
import style from "./style.scss";

@observer
export default class Main extends React.Component<any, any>
{
	render()
	{
		return (
			<main className={style.container}>
				<b>Welcome!</b>
			</main>
		);
	}
}
