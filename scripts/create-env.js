const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `API_FLOWERS=${process.env.API_FLOWERS}\n API_PLANTS=${API_PLANTS}\n API_GIFTS=${API_GIFTS}\n `
);
