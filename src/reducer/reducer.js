import { Actions } from "../actions/action";

const initialState = {
	tweetsData: [],
	filteredData: [],
	searchValue: "",
	cardCount: 10,
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case Actions.LoadData:
			return {
				...state,
				tweetsData: action.data,
			}
		case Actions.UpdateSearchValue:
			return {
				...state,
				searchValue: action.value,
			}
		case Actions.UpdateFilteredData:
			return {
				...state,
				filteredData: action.filteredData,
				cardCount: 10,
			}
		case Actions.UpdateCardCount:
			return {
				...state,
				cardCount: state.cardCount + 10,
			}
		default:
			return state
	}
}

export default reducer;