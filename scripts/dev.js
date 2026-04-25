#!/usr/bin/env node

const chokidar = require('chokidar');
const path = require('path');
const { spawn } = require('child_process');

const SRC_DIR = path.join(__dirname, '../src');

console.log('👀 Observando arquivos para mudanças...\n');

const watcher = chokidar.watch(SRC_DIR, {
  ignored: /(^|[\/\\])\.|node_modules/,
  persistent: true
});

function runBuild() {
  console.log('\n📝 Detectada mudança, reconstruindo...\n');
  const build = spawn('node', [path.join(__dirname, 'build.js')], {
    stdio: 'inherit'
  });
}

watcher.on('change', runBuild);
watcher.on('add', runBuild);
watcher.on('addDir', runBuild);
watcher.on('unlink', runBuild);

// Build inicial
runBuild();
