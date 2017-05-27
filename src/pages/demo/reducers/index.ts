export function reducer(state = {}, action) {
	switch (action.type) {
		case "DEMO_TEST":
			return { ...state, ...action.data };
	}

	return state;
}