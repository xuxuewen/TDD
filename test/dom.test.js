// Set up our document body
document.body.innerHTML =
  '<div>' +
  '  <span id="username" />' +
  '  <button id="button" />' +
  '</div>';
import fun from  '../src/dom';
test('displays a user after a click', () => {


  // This module has a side-effect
  // require('../displayUser');

  // const $ = require('jquery');
  // const fetchCurrentUser = require('../fetchCurrentUser');

  // // Tell the fetchCurrentUser mock function to automatically invoke
  // // its callback with some data
  // fetchCurrentUser.mockImplementation(cb => {
  //   cb({
  //     fullName: 'Johnny Cash',
  //     loggedIn: true,
  //   });
  // });
  fun();
  // Use jquery to emulate a click on our button
  let btn = document.getElementById('button');

  btn.click();
  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  // expect(fetchCurrentUser).toBeCalled();
  expect(btn.innerHTML).toEqual('demo');
});