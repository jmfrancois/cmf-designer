import React from 'react';
import { shallow } from 'enzyme';

import FileAnalytics from './FileAnalytics.component';

describe('FileAnalytics', () => {
	it('should render', () => {
		const wrapper = shallow(
			<FileAnalytics.WrappedComponent />
		);
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
