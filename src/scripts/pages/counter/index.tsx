import React from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {State} from "data";
import {increase, decrease, set} from "data/counter/actions";

import style from "./style.scss";

class Counter extends React.Component<StateProps & DispatchProps, OwnState> {
	state = {
		input: 0
	};

	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.set(e.target.valueAsNumber);
	};

	render() {
		return (
			<section className={style.container}>
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

interface StateProps {
	value: number;
}

interface DispatchProps {
	increase(value: number): void;
	decrease(value: number): void;
	set(value: number): void;
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

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Counter);
