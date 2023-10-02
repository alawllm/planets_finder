import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { afterAll, beforeAll } from "vitest";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";

import { server } from "../src/mocks/server";

beforeAll(() => server.listen());
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Reset and stop the server after all tests finish
afterAll(() => server.resetHandlers(), server.close());
