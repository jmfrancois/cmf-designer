import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';

function ViewComponent(props) {
	return (
		<div>
			<button
				className="btn btn-danger pull-right"
				onClick={() => props.dispatch({
					type: ViewComponent.ACTION_TYPE_DELETE_BTN,
					id: props.item.id,
				})}
			>
				Delete
			</button>
			<h1>{props.item.name}</h1>
		</div>
	);
}

ViewComponent.propTypes = {
	item: PropTypes.object,
	...cmfConnect.propTypes,
};
ViewComponent.ACTION_TYPE_DELETE_BTN = 'VIEW_COMPONENT_DELETE_BTN_CLICKED';
ViewComponent.displayName = 'ViewComponent';
ViewComponent.defaultProps = {
	item: {},
};
export default cmfConnect({})(ViewComponent);
