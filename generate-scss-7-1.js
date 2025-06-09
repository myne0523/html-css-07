// generate-scss-7-1.js

const fs = require("fs");
const path = require("path");

const folders = {
  "abstracts": ["_variables.scss", "_mixins.scss", "_functions.scss"],
  "base": ["_reset.scss", "_typography.scss", "_base.scss"],
  "components": ["_button.scss", "_card.scss", "_form.scss"],
  "layout": ["_header.scss", "_footer.scss", "_grid.scss"],
  "pages": ["_home.scss", "_about.scss"],
  "themes": ["_default.scss"],
  "vendors": ["_normalize.scss"]
};

const root = path.join(__dirname, "scss"); // tạo trong thư mục scss

if (!fs.existsSync(root)) {
  fs.mkdirSync(root);
}

for (const folder in folders) {
  const folderPath = path.join(root, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  folders[folder].forEach((file) => {
    const filePath = path.join(folderPath, file);
    fs.writeFileSync(filePath, `// ${file}`, { flag: "wx" });
  });
}

// Tạo file main.scss nếu chưa có
const mainFile = path.join(root, "main.scss");
if (!fs.existsSync(mainFile)) {
  fs.writeFileSync(mainFile, "// main.scss");
}

console.log("✅ SCSS 7-1 structure created!");
