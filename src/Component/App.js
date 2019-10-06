import React from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
// import './App.css';
import SearchBox from "./search";
import Card from "./card";
import { doLoadInitData, doLoadMore } from "../actions/action";

const tweetsDataFile = require("../tweetsData.json");

class App extends React.Component {

	componentWillMount() {
		this.props.onLoadInitData(tweetsDataFile);
	}

	render() {
		console.log(this.props);
		const { filteredData, cardCount } = this.props;
		return (
			<div className=" App">
				{/* <header className="App-header">
					
				</header> */}
				<div className="row justify-content-center">
					<div className="">
						<SearchBox />
					</div>
				</div>
				<div className="row justify-content-center">
					{filteredData && filteredData.length > 0 &&
						<Card filteredData={filteredData} cardCount={cardCount} />
					}
				</div>
				{filteredData.length > cardCount &&
					<div className="d-flex justify-content-center m-2">
						<button className="rounded-pill btn btn-light" onClick={() => this.props.onLoadMore()} >Load More</button>
					</div>
				}
			</div >
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tweetsData: state.tweetsData,
		searchValue: state.searchValue,
		filteredData: state.filteredData,
		cardCount: state.cardCount,
	};
};
const mapDispatchToprops = (dispatch) => {
	return {
		onLoadInitData: (value) => dispatch(doLoadInitData(value)),
		onLoadMore: () => dispatch(doLoadMore())
	}
}
export default connect(mapStateToProps, mapDispatchToprops)(App)

// export default App;
