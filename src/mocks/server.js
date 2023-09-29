// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import { beforeAll, afterAll } from 'vitest';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
// Start the server before running your tests
beforeAll(() => server.listen());
// Reset and stop the server after all tests finish
afterAll(() => server.resetHandlers(), server.close());