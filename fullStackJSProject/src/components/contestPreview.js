import React , { Component } from 'react';
import Proptypes from 'prop-types';

class ContestPreview extends Component {
	handleClick = () => {
		this.props.onClick(this.props.id);
	};
	render() {
		return(
			<div className="link ContestPreview" onClick={this.handleClick}>
			<div className="category-name">
				{this.props.categoryName}
			</div>
			<div className="contest-name">
				{this.props.contestName}
			</div>
			</div>
		);
	}
}

// ContestPreview = {
// 	categoryName: Proptypes.string.isRequired,
// 	contestName: Proptypes.string.isRequired,
// };

export default ContestPreview;