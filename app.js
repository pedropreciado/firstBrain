const brain = require("brain.js");
const network = new brain.NeuralNetwork();
const rgbData = require("./rgb_dataset.js");

network.train(rgbData);

const result = network.run({ r: 0, g: 1, b: 0.65 });
console.log(result);
