const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `API_FLOWERS=${process.env.API_FLOWERS}\n API_PLANTS=${process.env.API_PLANTS}\n API_GIFTS=${process.env.API_GIFTS}\n `
);
