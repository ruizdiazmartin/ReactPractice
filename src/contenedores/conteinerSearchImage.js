import React from 'react';
import { fetchSearchImages } from '../actions/searchImageAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Buscador from '../componentes/Buscador';
import Result from '../componentes/Result';


class conteinerSearchImage extends React.Component {

	scroll = () => {
		const element = document.querySelector('.jumbotron')
		element.scrollIntoView('smooth', 'start')
	}

	pagePreviu = () => {
		this.props.fetchSearchImages(this.props.imagesReducers.search, this.props.imagesReducers.page - 1);
	}

	pageNext = () => {
		this.props.fetchSearchImages(this.props.imagesReducers.search, this.props.imagesReducers.page + 1);
	}


	searchData = (busqueda) => {
		this.props.fetchSearchImages(busqueda, 1);
	}


	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<p className="lead text-center">Search of Images</p>
					<Buscador
						searchData={this.searchData}
					/>
				</div>
				<div className="text-center">
					{this.props.imagesReducers.isFetching ?
						<div class="spinner-border"></div>
						:
						this.props.imagesReducers.totalImages === 0 ?
							"NO HAY RESULTADOS PARA ESTA BUSQUEDA, INTENTE CON OTRA"
							:
							<Result
								imagesReducers={this.props.imagesReducers}
								pagePreviu={this.pagePreviu}
								pageNext={this.pageNext}
							/>
					}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		imagesReducers: state.imagesReducers
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSearchImages: bindActionCreators(fetchSearchImages, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(conteinerSearchImage)



