import React, { Component } from 'react'


class Searcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	onChange = (event) => {
		debugger
		this.setState({search: event.target.value});
	  }

	getData = (event) => {
		event.preventDefault();
		debugger
		this.props.searchData(this.state.search);
	}

	clearSearch = () => {
		this.setState({search: ''});
		this.props.clearSearch()
	}


	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.getData}>
					<div className="row">
						<div className="form-group col-md-8">
							<input value={this.state.search} onChange={this.onChange} type="text" className="form-control form-control-lg" placeholder="Search your image. Example: Futbol" />
						</div>
						{/* <div className="form-group col-md-4" >
							<input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..." />
						</div> */}
					</div>
				</form>
				<input type="submit" onClick={this.clearSearch} className="btn btn-lg btn-danger btn-block" value="Eliminar Busqueda" />
			</React.Fragment>
		)
	}
}

export default Searcher
