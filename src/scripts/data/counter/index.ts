import {ActionTypes, Action} from "./actions";

export interface State {
	value: number;
}

const initialState: State = {
	value: 0
};

export default function reducer(state = initialState, action: Action): State {
	switch (action.type)
	{
		case ActionTypes.INCREASE:
			return {value: state.value + action.payload.value};
		case ActionTypes.DECREASE:
			return {value: state.value - action.payload.value};
		case ActionTypes.SET:
			return {value: action.payload.value};
		default:
			return state;
	}
}
