/**
 * Import theme.
 * Being the first import is important, so that it is the default style
 * and other style can override it
 */
import '@talend/bootstrap-theme/src/theme/theme.scss';
import cmf, { cmfConnect } from '@talend/react-cmf';
import * as talendComponents from '@talend/react-components';
import { ObjectViewer, TreeView } from '@talend/react-containers';

import './index.scss';
import appComponents from './components';
import selectors from './selectors';
import saga from './saga';
import componentsService from './services/components';
import expressionsService from './services/expressions';
import sagasService from './services/sagas';
import propsService from './services/props';
import poutesService from './services/routes';
import logsService from './services/logs';
import selectorTo from './experimental-cmf/selectorTo';

const DEFAULT_WITH_PROPS = { withComponentRegistry: true };

function getWithProps(component) {
	if (component === 'Icon') {
		return {};
	}
	return DEFAULT_WITH_PROPS;
}

// just cmfConnect talend components
const onlyComponents = Object.keys(talendComponents)
	.filter(key => typeof talendComponents[key] === 'function')
	.reduce((acc, key) => ({
		...acc,
		[key]: cmfConnect({ omitCMFProps: true, ...getWithProps(key) })(talendComponents[key]),
	}), {});


const selectorsAsExpressions = {};
Object.keys(selectors).forEach(key => {
	selectorsAsExpressions[key] = selectorTo.toExpression(selectors[key]);
});

const talendComponentsModule = {
	id: 'talend-components',
	components: {
		...onlyComponents,
		ObjectViewer,
		TreeView,
	},
};

const cmfModule = {
	expressions: selectorsAsExpressions,
	components: appComponents,
	saga,
	settingsURL: '/settings.json',
	modules: [
		talendComponentsModule,
		logsService,
		componentsService,
		expressionsService,
		sagasService,
		propsService,
		poutesService,
	],
};
console.log(cmfModule);
cmf.bootstrap(cmfModule);
