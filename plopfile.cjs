module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{camelCase name}}",
        templateFiles: "templates/*.hbs",
        base: "templates",
      },
    ],
  });
};
