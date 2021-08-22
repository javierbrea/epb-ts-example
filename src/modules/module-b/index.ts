import moduleA from "@modules/module-a";

// Example of import using relative paths
import componentB from "../../components/component-b";

function moduleB(say: string): string {
  console.log(componentB("imported from module-b"));
  console.log(moduleA("imported from module-b"));
  return "Hi, I'm module-b " + say;
}

export default moduleB;
