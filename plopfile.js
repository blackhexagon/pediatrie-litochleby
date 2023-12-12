export default function (plop) {
  // component generator
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
      {
        type: "input",
        name: "tag",
        message: "component tag please",
      },
      {
        type: "input",
        name: "prop",
        message: "component prop please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}.astro",
        templateFile: "plop-templates/component.hbs",
      },
    ],
  });
}
