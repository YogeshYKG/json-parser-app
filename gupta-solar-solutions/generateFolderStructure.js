import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const walk = (dir, prefix = '') => {
  let result = '';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    result += `${prefix}- ${file}\n`;

    if (stat.isDirectory()) {
      result += walk(filepath, prefix + '  ');
    }
  }

  return result;
};

const structure = walk(path.join(__dirname, 'src'));

// Ensure folderStructure exists
const outputDir = path.join(__dirname, 'folderStructure');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.writeFileSync(path.join(outputDir, 'folderStructure.txt'), structure);
console.log('✅ Folder structure updated in folderStructure/folderStructure.txt');