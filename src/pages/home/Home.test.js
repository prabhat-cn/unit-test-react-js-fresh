import { shallow } from 'enzyme';

import '../../setupTests';
import Home from './Home';

describe('Shallow the home page', () => {
  it('Object Check', () => {
    let wrapper = shallow(<Home />);
    // console.log('test->', wrapper.debug());
    // one type by class
    expect(wrapper.exists('.homeCls')).toEqual(true);
    // two type by defined test class
    const homeComponent = wrapper.find("[data-test='component-home']");
    expect(homeComponent.length).toBe(1);
  });
});
