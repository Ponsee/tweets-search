
export const Actions = {
	LoadData: "Actions.LoadData",
	UpdateSearchValue: "Actions.UpdateSearchValue",
	UpdateFilteredData: "Actions.UpdateFilteredData",
	UpdateCardCount: "Actions.UpdateCardCount"
}

export function doLoadInitData(fileData) {
	return {
		type: Actions.LoadData,
		data: fileData
	}
}

export function doUpdateSearchValue(value) {
	return {
		type: Actions.UpdateSearchValue,
		value
	}
}

export function doSearch(value, tweetsData) {
	if (value) {
		const filteredData = tweetsData.filter(p => p.text.includes(value));
		return {
			type: Actions.UpdateFilteredData,
			filteredData
		}
	} else {
		return {
			type: Actions.UpdateFilteredData,
			filteredData: []
		}
	}
}

export function doLoadMore() {
	return {
		type: Actions.UpdateCardCount
	}
}