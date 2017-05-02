import {applyMiddleware, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {History} from "history";
import reducer, {State} from "data";

export default (history: History, initialState?: State) => {
	const enhancers = composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history)
		)
	);

	const store = initialState
		? createStore<State>(connectRouter(history)(reducer), initialState, enhancers)
		: createStore<State>(connectRouter(history)(reducer), enhancers);

	if ((process.env.NODE_ENV === "development") && module.hot) {
		module.hot.accept("data", () => {
			store.replaceReducer(connectRouter(history)(reducer));
		});
	}

	return store;
};
