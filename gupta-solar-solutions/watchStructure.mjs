import chokidar from 'chokidar';
import { exec } from 'child_process';

const watcher = chokidar.watch('./src', { ignoreInitial: true });

watcher.on('all', () => {
  exec('node generateFolderStructure.js', (err, stdout, stderr) => {
    if (stdout) console.log(stdout.trim());
    if (stderr) console.error(stderr.trim());
    if (err) console.error('❌ Error:', err);
  });
});

console.log('👀 Watching ./src for folder structure changes...');