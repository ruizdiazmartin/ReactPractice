import React, { Component } from 'react'



class Buscador extends Component {

	searchReference = React.createRef();

	getData = (e) => {
		e.preventDefault()

		//Tomamos el valor del input
		const inputValue = this.searchReference.current.value

		//Lo enviamos al componente principal
		this.props.searchData(inputValue)

	}


	render() {
		return (
			<form onSubmit={this.getData}>
				<div className="row">
					<div className="form-group col-md-8">
						<input ref={this.searchReference} type="text" className="form-control form-control-lg" placeholder="Search your image. Example: Futbol" />
					</div>
					<div className="form-group col-md-4" >
						<input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..." />
					</div>
				</div>
			</form>
		)
	}
}

export default Buscador
