/* eslint-disable valid-jsdoc */
export default {
  /**
   * A set of globs passed to the glob package that qualify typescript files for testing.
   */
  entries: ['**/assembly/**/*.spec.ts'],
  /**
   * A set of globs passed to the glob package that quality files to be added to each test.
   */
  include: ['assembly/**/*.include.ts'],
  /**
   * A set of regexp that will disclude source files from testing.
   */
  disclude: [/node_modules/],
  /**
   * Add your required AssemblyScript imports here.
   *
   */
  async instantiate(memory, createImports, instantiate, binary) {
    let instance; // Imports can reference this
    const myImports = {
      // put your web assembly imports here, and return the module
    };
    return instantiate(binary, createImports(myImports));
  },
  /** Enable code coverage. */
  // coverage: ["assembly/**/*.ts"],
  /**
   * Specify if the binary wasm file should be written to the file system.
   */
  outputBinary: false,
};
