export const mocks = {
  Query: () => ({
      helloworld: "Hello World!",
      hello: (root, { name }) => `Hello ${name}!`
  })
};
