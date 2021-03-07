const a = function () {
  console.log(arguments);
};

a("ghjk", 34, true);

a`
coucou ${"Kevin"}
`;

a({ 0: ["\ncoucou ", "\n"], 1: "Kevin" });
