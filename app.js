const brain = require("brain.js");
const network = new brain.NeuralNetwork();

network.train([
  {input: { r, g, b }, output: {dark: 1}},
]);

const result = network.run({height: 70, weight: 200});
console.log(result);
