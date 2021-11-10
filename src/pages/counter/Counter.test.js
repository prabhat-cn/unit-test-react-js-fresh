import { shallow } from 'enzyme';
import '../../setupTests';
import Table from '../table/Table';
import { Counter } from './Counter';

describe('Counter Component', () => {
  // it('render Without any error is Present', () => {
  //   let wrapper = shallow(<Counter />);
  //   console.log(wrapper.debug());
  //   let isPresent = wrapper
  //     // .find('fragment')
  //     // .dive()
  //     .is('[data-test="component-counter"]');
  //   expect(isPresent).toBe(true);
  // });
  it('render Without any error & find length', () => {
    let wrapper = shallow(<Counter />);
    let isPresent = wrapper.find('[data-test="component-counter"]');
    expect(isPresent.length).toBe(1);
  });
  it('Click Count Increment', () => {
    let wrapper = shallow(<Counter />);
    // without click zero state by class
    let countZero = wrapper.find('.click-count-0');
    expect(countZero.length).toBe(1);
    // Count start 1 by simulate click
    wrapper.find('[data-test="increment-button"]').simulate('click');
    let countOne = wrapper.find('.click-count-1');
    expect(countOne.length).toBe(1);

    // or nother type
    let incrementCount = wrapper.find('[data-test="count"]').text();
    expect(incrementCount).toBe('1');
  });

  it('Click Count Increment 2', () => {
    let wrapper = shallow(<Counter />);
    // without click zero state by class
    let countZero = wrapper.find('.click-count-0');
    expect(countZero.length).toBe(1);
    // Count by simulate double click
    wrapper.find('[data-test="increment-button"]').simulate('click');
    wrapper.find('[data-test="increment-button"]').simulate('click');
    let countOne = wrapper.find('.click-count-2');
    expect(countOne.length).toBe(1);
  });

  it('Click Count Increment 3', () => {
    let wrapper = shallow(<Counter />);
    // without click zero state by class
    let countZero = wrapper.find('.click-count-0');
    expect(countZero.length).toBe(1);
    // Count by simulate triple click
    wrapper.find('[data-test="increment-button"]').simulate('click');
    wrapper.find('[data-test="increment-button"]').simulate('click');
    wrapper.find('[data-test="increment-button"]').simulate('click');
    let countOne = wrapper.find('.click-count-3');
    expect(countOne.length).toBe(1);
  });

  it('Click Count Decrement', () => {
    const wrapper = shallow(<Counter />);
    // Find the button
    wrapper.find('[data-test="decrement-button"]').simulate('click');
    let decrementCount = wrapper.find('[data-test="count"]').text();
    expect(decrementCount).toBe('0');
  });

  // Tag <Table /> check

  it('dive to table tag', () => {
    const wrapper = shallow(<Counter />);
    // find the <Table />
    let tableTag = wrapper
      .find(Table)
      .dive()
      .find('center')
      .find('[data-test="component-table"]');
    // console.log(tableTag.debug());
    expect(tableTag.length).toBe(1);
  });

  // SnapShot Checking
  it('Snapshot- 1', () => {
    // for specific component snapshot`
    let wrapper = shallow(<Table />);
    // Autometic snapshot created
    expect(wrapper).toMatchSnapshot();
  });
  //  if you want to take another snapshot
  it('Snapshot- 2', () => {
    // for specific component snapshot`
    let wrapper = shallow(<Table />);
    // Autometic snapshot created
    expect(wrapper).toMatchSnapshot();
  });

  //  if you want to take another snapshot
  it('Snapshot- 3', () => {
    // for specific component snapshot`
    let wrapper = shallow(<Table />);
    // Autometic snapshot created
    expect(wrapper).toMatchSnapshot();
  });
});
