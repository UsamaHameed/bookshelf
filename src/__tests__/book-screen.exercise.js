// 🐨 here are the things you're going to need for this test:
// import React from 'react'
// import {render, screen, waitFor} from '@testing-library/react'
// import {queryCache} from 'react-query'
// import {buildUser, buildBook} from 'test/generate'
// import {localStorageKey} from 'utils/api-client'
// import {AppProviders} from 'context'
// import {App} from 'app'

// 🐨 before each test, clear the queryCache

test.todo('renders all the book information')
// 🐨 "authenticate" the client by setting the localStorageKey in localStorage to some string value (can be anything for now)

// 🐨 create a user using `buildUser`
// 🐨 create a book use `buildBook`
// 🐨 update the URL to `/book/${book.id}`
//   💰 window.history.pushState({}, 'page title', route)
//   📜 https://developer.mozilla.org/en-US/docs/Web/API/History/pushState

// 🐨 mock window.fetch with mockImplementation and handle the following requests:
// - url ends with `/me`: respond with {user}
// - url ends with `/list-items`: respond with {listItems: []}
// - url ends with `/books/${book.id}`: respond with {book}
// 💰 window.fetch.mockImplementation((url, config) => { /* handle stuff here*/ })
// 💰 return Promise.resolve({ok: true, json: async () => ({ /* response data here */ })})

// 🐨 render the App component and set the wrapper to the AppProviders
// (that way, all the same providers we have in the app will be available in our tests)

// 🐨 use waitFor to wait for the queryCache to stop fetching and the loading
// indicators to go away
// 📜 https://testing-library.com/docs/dom-testing-library/api-async#waitfor
// 💰 if (queryCache.isFetching or there are loading indicators) then throw an error...

// 🐨 assert the book's info is in the document
