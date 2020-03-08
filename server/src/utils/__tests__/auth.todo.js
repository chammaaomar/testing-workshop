import {isPasswordAllowed} from '../auth'
import {userToJSON} from '../auth'

test('isPasswordAllowed only allows some passwords', () => {
  // here's where I'll demo things for you :)
  // the more your tests resemble the way your
  // software is used, the more confidence these
  // tests can give you
  // can use assertions to ensure tests are running
  // but have to manually increment
  expect.assertions(4); 
  expect(isPasswordAllowed('')).toBe(false);
  expect(isPasswordAllowed('ffffffffff')).toBe(false);
  expect(isPasswordAllowed('8888888888')).toBe(false);
  expect(isPasswordAllowed(';jgsl;jsg12')).toBe(true);
  // important: verify your tests can fail!
  // and it is testing the component you think it is
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  const date = new Date();
  let sensitive_data = {
    exp: date,
    iat: date,
    hash: '8743b52063cd84097a65d1633f5c74f5',
    salt: '88fcd28'
  }
  let test_usr = {
    id: 67381,
    username: 'sarah-connor',
    ...sensitive_data
  }
  // expect.not.objectContaining seems broken...
  expect(userToJSON(test_usr)).not.toEqual(expect.objectContaining(sensitive_data));
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
