const { data } = require("./data");
const { filterCountriesByAnimalName, count } = require("./functions");
const util = require("util");

const app = () => {
  const args = process.argv.slice(2);

  let filter;
  let needCount = false;
  args.forEach((arg) => {
    if (arg.startsWith("--filter=")) {
      filter = arg.substring(9);
    }
    if (arg.startsWith("--count")) {
      needCount = true;
    }
  });

  const finalData = needCount
    ? count(filterCountriesByAnimalName(data, filter || ""))
    : filterCountriesByAnimalName(data, filter || "");

  console.dir(finalData, { depth: null });
};

app();
