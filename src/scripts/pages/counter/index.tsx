import React from "react";
import Helmet from "react-helmet";
import {connect} from "react-redux";
import {translate, InjectedTranslateProps} from "react-i18next";
import {Action, Dispatch} from "redux";
import {State} from "data";
import {increase, decrease, set} from "data/counter";

import style from "./style.scss";

@translate("counter")
class Counter extends React.Component<Props, OwnState> {
	state = {
		input: 0
	};

	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.valueAsNumber;
		this.props.set(Number.isFinite(value) ? value : this.props.value);
	};

	render() {
		const t = this.props.t!;

		return (
			<section className={style.container}>
				<Helmet title={t("title")} />

				<h2>{this.props.value}</h2>
				<div className={style.controls}>
					<button onClick={this.props.decrease.bind(this, 1)}>-</button>
					<input
						type="number"
						value={this.props.value}
						onChange={this.onChange}
					/>
					<button onClick={this.props.increase.bind(this, 1)}>+</button>
				</div>
			</section>
		);
	}
}

type Props = StateProps & DispatchProps & OwnProps;

interface StateProps {
	value: number;
}

interface DispatchProps {
	increase(value: number): void;
	decrease(value: number): void;
	set(value: number): void;
}

interface OwnProps extends InjectedTranslateProps {

}

interface OwnState {
	input: number;
}

const mapStateToProps = (state: State) => ({
	value: state.counter.value
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	increase: (value: number) => dispatch(increase(value)),
	decrease: (value: number) => dispatch(decrease(value)),
	set: (value: number) => dispatch(set(value))
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Counter);
