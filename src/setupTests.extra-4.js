import '@testing-library/jest-dom'
import {queryCache} from 'react-query'
import {setupServer} from 'msw/node'
import {handlers} from './test/server-handlers'

jest.mock('test/server', () => {})

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
const mockServer = setupServer(...handlers)
beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())

// allow tests to mock the implementation of window.fetch
beforeEach(() => jest.spyOn(window, 'fetch'))
afterEach(() => window.fetch.mockRestore())

// general cleanup
afterEach(() => {
  window.localStorage.clear()
  queryCache.clear()
})
