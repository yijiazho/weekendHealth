import { greet } from './main'

test('greets the world', () => {
    console.log("successfully run the test")
    expect(greet("World")).toBe("Hello, World!");
});
