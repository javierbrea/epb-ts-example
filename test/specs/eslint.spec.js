const { npmRun } = require("../support/npm");

describe("eslint execution", () => {
  let npmCommandResult;

  describe("result", () => {
    beforeAll(async () => {
      npmCommandResult = await npmRun("lint");
    }, 10000);

    it("should exit with code 1", () => {
      expect(npmCommandResult.code).toEqual(1);
    });

    it("should have reported 1 error", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining("1 problem (1 error, 0 warnings)"),
      );
    });

    it("should have reported eslint-plugin-boundaries error in module-b", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining(
          "1:21  error  No rule allowing this dependency was found. File is of type 'modules'. Dependency is of type 'modules'  boundaries/element-types",
        ),
      );
    });
  });

  describe("with debug enabled", () => {
    beforeAll(async () => {
      npmCommandResult = await npmRun("lint", {
        env: {
          ESLINT_PLUGIN_BOUNDARIES_DEBUG: 1,
        },
      });
    });

    it("should have detected type of root file", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining("[boundaries]: 'src/index.ts' is of type 'root'"),
      );
    });

    it("should have detected type of component-a", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining(
          "[boundaries]: 'src/components/component-a/index.ts' is of type 'components'",
        ),
      );
    });

    it("should have detected type of component-b", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining(
          "[boundaries]: 'src/components/component-b/index.ts' is of type 'components'",
        ),
      );
    });

    it("should have detected type of module-a", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining(
          "[boundaries]: 'src/modules/module-a/index.ts' is of type 'modules'",
        ),
      );
    });

    it("should have detected type of module-b", () => {
      expect(npmCommandResult.logs).toEqual(
        expect.stringContaining(
          "[boundaries]: 'src/modules/module-b/index.ts' is of type 'modules'",
        ),
      );
    });
  });
});
