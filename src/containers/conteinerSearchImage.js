import React from 'react';
import { fetchSearchImages, fetchSearchImagesClear } from '../actions/searchImageAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import Result from '../components/Result';


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


	handleSearchData = (busqueda) => {
		this.props.fetchSearchImages(busqueda, 1);
	}

	handleSearchImagesClear = () => {
		this.props.fetchSearchImagesClear();
	}


	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<p className="lead text-center">Search of Images</p>
					<Searcher
						search={this.props.imagesReducers.search}
						searchData={this.handleSearchData}
						clearSearch={this.handleSearchImagesClear} />
				</div>
				<div className="text-center">
					{this.props.imagesReducers.isFetching ?
						<div className="spinner-border"></div>
						:
						this.props.imagesReducers.totalImages === 0 ?
							"NO HAY RESULTADOS PARA ESTA BUSQUEDA, INTENTE CON OTRA"
							:
							this.props.imagesReducers.clear ?
								"USTED ELIMINO LA BUSQUEDA, PUEDE GERAR OTRA!!!"
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
		fetchSearchImagesClear: bindActionCreators(fetchSearchImagesClear, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(conteinerSearchImage)



