const AxeBuilder = require("@axe-core/webdriverio").default;
const { remote } = require("webdriverio");

(async () => {
  const client = await remote({
    logLevel: "info",
    capabilities: {
      browserName: "chrome"
    }
  });

  await client.url("http://localhost:3000");

  const builder = new AxeBuilder({ client });
  try {
    const results = await builder.analyze();
    console.log(results);
  } catch (e) {
    console.error(e);
  }
})();
