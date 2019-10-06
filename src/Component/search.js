import React from 'react';
import { connect } from 'react-redux';
import { doUpdateSearchValue, doSearch } from "../actions/action"

class SearchBox extends React.Component {

	searchBoxChange(e) {
		this.props.onUpdateSearchValue(e.target.value);
	}

	searchButtonClick() {
		const { tweetsData, searchValue } = this.props;
		this.props.onSearch(searchValue, tweetsData);
	}

	render() {
		return (
			<div className="m-2">
				<input key="searchBox" className="m-1" placeholder="Search Tweets" value={this.props.searchValue} type="text" onChange={this.searchBoxChange.bind(this)} />
				<button className="rounded-pill btn btn-light" onClick={this.searchButtonClick.bind(this)}>Search</button>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		tweetsData: state.tweetsData,
		searchValue: state.searchValue,
		filteredData: state.filteredData
	};
};
const mapDispatchToprops = (dispatch) => {
	return {
		onUpdateSearchValue: (value) => dispatch(doUpdateSearchValue(value)),
		onSearch: (value, tweetsData) => dispatch(doSearch(value, tweetsData))
	}
}
export default connect(mapStateToProps, mapDispatchToprops)(SearchBox)

// export default SearchBox