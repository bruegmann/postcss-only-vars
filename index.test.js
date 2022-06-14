const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("Only output CSS variable declarations", async () => {
  const input = /*css*/ `
  @charset "UTF-8";
  :root {
    --bs-primary: blue;
  }

  body {
    --body-bg: white;
    background: var(--body-bg);
    color: black;
  }

  a {
    color: var(--bs-primary);
  }

  @media (min-width: 1200px) {
    .display-1 {
      font-size: 3rem;
    } 
  }
  `;

  const expectedOutput = /*css*/ `
  @charset "UTF-8";
  :root {
    --bs-primary: blue;
  }

  body {
    --body-bg: white;
  }
  `;

  await run(input, expectedOutput, {});
});
