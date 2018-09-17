import React from 'react';
import PropTypes from 'prop-types';

class FooBar extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.name}</div>
		);
	}
}

export default FooBar;
