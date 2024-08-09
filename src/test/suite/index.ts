import * as path from "path";
import Mocha from "mocha"; // Use default import for Mocha
import { glob, GlobOptions } from "glob"; // Import the glob function and its options type
import { promisify } from "util"; // Import promisify from util

const globPromise = promisify(glob) as (
  pattern: string,
  options: GlobOptions
) => Promise<string[]>; // Promisify the glob function with type

export async function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: "bdd",
    color: true,
  });

  const testsRoot = path.resolve(__dirname);

  try {
    const files: string[] = await globPromise("**/**.test.js", {
      cwd: testsRoot,
    });

    // Add files to the test suite
    files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)));

    // Run the mocha test
    return new Promise((resolve, reject) => {
      try {
        mocha.run((failures) => {
          if (failures > 0) {
            reject(new Error(`${failures} tests failed.`));
          } else {
            resolve();
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  } catch (err) {
    return Promise.reject(err);
  }
}
