import componentA from "@components/component-a";

function moduleA(say: string): string {
  console.log(componentA("imported from module-a"));
  return "Hi, I'm module-a " + say;
}

export default moduleA;
