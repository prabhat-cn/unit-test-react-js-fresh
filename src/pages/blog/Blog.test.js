import { shallow, ShallowWrapper } from 'enzyme';
import '../../setupTests';
import Blog from './Blog';

const setup = () => {
  shallow(<Blog />);
};

describe('Blog Component Test', () => {
  it('Component render without error', () => {
    // const wrapper = setup();
    const wrapper = shallow(<Blog />);
    // console.log('errorless->', wrapper.debug());
    const blogComponent = wrapper.find('[data-test="component-blog"]');
    expect(blogComponent.length).toBe(1);
  });
  // it('Test state', () => {
  //   const wrapper = shallow(<Blog />);
  //   expect(wrapper.state()).toEqual({ name: 'Blog State', id: 11 });
  // });
  it('Html Tag Check', () => {
    const wrapper = shallow(<Blog />);
    expect(
      wrapper.contains(
        <div className="htmlCls" data-test="component-post">
          Blog Post
        </div>
      )
    ).toEqual(true);
  });
  it('Only Message Check', () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.containsAllMatchingElements([<div>Blog Post</div>])).toEqual(
      true
    );
  });
  it('Multiple Html Tag Message Check', () => {
    const wrapper = shallow(<Blog />);
    expect(
      wrapper.containsAnyMatchingElements([
        <div>Help Post</div>,
        <div>Code Post</div>,
      ])
    ).toEqual(true);
  });

  // Inner parts test
  it('Find Check Li Tags', () => {
    let wrapper = shallow(<Blog />);
    // check by className
    const liTagClass = wrapper.find('.liCls');
    expect(liTagClass.length).toBe(3);
    // By data-teat
    const liTagDataTest = wrapper.find('[data-test="component-li"]');
    expect(liTagDataTest).toHaveLength(3);
    expect(liTagDataTest.length).toEqual(3);
  });

  it('At & Key Check in Li', () => {
    let wrapper = shallow(<Blog />);
    // check by className
    const liTagClass = wrapper.find('.liCls');
    expect(liTagClass.at(0).key()).toBe('react');
  });

  it('Child Check', () => {
    let wrapper = shallow(<Blog />);
    // check by className
    const childTagClass = wrapper.find('[data-test="component-number"]');
    expect(childTagClass.childAt(0).type()).toBe('span');
  });

  it('Children length check full length', () => {
    let wrapper = shallow(<Blog />);
    // check by className
    const ulTagClass = wrapper.find('ul');
    // 3 <li> tags inside of <ul>
    expect(ulTagClass.children().length).toBe(3);
  });

  it('hasClass inside of class of button check', () => {
    let wrapper = shallow(<Blog />);
    // check by className
    const hasClassButton = wrapper.find('.my-button');
    // 3 <li> tags inside of <ul>
    expect(hasClassButton.hasClass('disabled')).toBe(true);
  });

  it('is Check inside of main Div', () => {
    let wrapper = shallow(<Blog />);
    // 3 <li> tags inside of <ul>
    expect(wrapper.is('.mainCls')).toBe(true);
  });
});
