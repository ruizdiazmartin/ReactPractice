import React, { Component } from 'react'


class Searcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	onChange = (event) => {
		this.setState({ search: event.target.value });
	}

	getData = (event) => {
		event.preventDefault();
		this.props.searchData(this.state.search);
	}

	clearSearch = () => {
		this.setState({ search: '' });
		this.props.clearSearch()
	}


	render() {
		return (
			<React.Fragment>
				<tr>
					<td className="form-group col-md-8">
						<form onSubmit={this.getData}>
							<input minLength="3" pattern="[a-z]{1,15}" value={this.state.search} onChange={this.onChange} type="text" className="form-control form-control-lg" placeholder="Search your image. Example: Futbol" required />
						</form>
					</td>
					<td>
						<button type="submit" onClick={this.clearSearch} className="btn btn-primary btn-sm">X</button>
					</td>
				</tr>
			</React.Fragment>
		)
	}
}

export default Searcher
