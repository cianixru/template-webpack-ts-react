import {RouterState} from "connected-react-router";
import {combineReducers} from "redux";

import counter, * as counterAll from "./counter";

export interface State {
	counter: counterAll.State;
	router: RouterState;
}

export interface TypedAction<T extends string> {
	readonly type: T;
	payload: {};
}

export default combineReducers<State>({
	counter
});
