#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

const publicDir = path.resolve('public');

// ImageMagick quality: 0-100 (higher = larger files)
const quality = 60;

try {
  const files = listPngs(publicDir);
  if (files.length === 0) {
    console.log(`No .png files found in ${publicDir}`);
    process.exit(0);
  }

  for (const inputPath of files) {
    const outputPath = inputPath.replace(/\.png$/iu, '.avif');
    const result = spawnSync(
      'magick',
      [inputPath, '-quality', String(quality), outputPath],
      { stdio: 'inherit' },
    );

    if (result.error) {
      throw result.error;
    }

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }

    console.log(`${inputPath} -> ${outputPath}`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

function listPngs(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listPngs(fullPath));
    } else if (entry.isFile() && fullPath.toLowerCase().endsWith('.png')) {
      files.push(fullPath);
    }
  }
  return files;
}
