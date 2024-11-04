const { npmRun } = require("../support/npm");

describe("TypeScript compilation", () => {
  let npmCommandResult;

  beforeAll(async () => {
    npmCommandResult = await npmRun("run:built");
  });

  it("should exit with code 0", () => {
    expect(npmCommandResult.code).toEqual(0);
  });

  it("should print component-a logs", () => {
    expect(npmCommandResult.logs).toEqual(
      expect.stringContaining("I'm component-a imported from module-a"),
    );
  });

  it("should print component-b logs", () => {
    expect(npmCommandResult.logs).toEqual(
      expect.stringContaining("I'm component-b imported from module-b"),
    );
  });

  it("should print module-a logs", () => {
    expect(npmCommandResult.logs).toEqual(
      expect.stringContaining("I'm module-a imported from root"),
    );
    expect(npmCommandResult.logs).toEqual(
      expect.stringContaining("I'm module-a imported from module-b"),
    );
  });

  it("should print module-b logs", () => {
    expect(npmCommandResult.logs).toEqual(
      expect.stringContaining("I'm module-b imported from root"),
    );
  });
});
