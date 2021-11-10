const sum = require('./Sum');

// Data testing
// describe('Update Home Page', () => {
//   it('My second test', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
//   describe('Update Inner Home Page', () => {
//     it('My Inner First Test', () => {
//       expect(sum(4, 5)).toBe(9);
//     });
//     it('My Inner Second Test', () => {
//       expect(sum(4, 9)).not.toBe(14);
//     });
//     it('My Inner Third Test', () => {
//       expect(sum(4, 13)).not.toBe(120);
//     });
//   });
// });

// Object Testing
describe('Update Inner Home Page', () => {
  it('My Inner First Test', () => {
    let data = sum(1, 2);
    expect(data).toEqual({ name: 'Sum Code Object Test' });
  });
});

// test('my first test case', () => {
//   let data = 10;
//   expect(data).toBe(10);
// });

// it('My second test', () => {
//   let data = 13;
//   expect(data).toBe(13);
// });
