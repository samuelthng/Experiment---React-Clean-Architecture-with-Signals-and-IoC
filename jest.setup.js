import { container } from "tsyringe";

// TSyringe: Destroy class instances after each test.
afterEach(() => container.clearInstances());
