#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

const publicDir = path.resolve('public');

// ImageMagick quality: 0-100 (higher = larger files)
const quality = 60;

// Source image formats to convert to AVIF.
const sourceExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp']);

try {
  const files = listSourceImages(publicDir);
  if (files.length === 0) {
    console.log(
      `No source images found in ${publicDir} for extensions: ${Array.from(sourceExtensions).join(', ')}`,
    );
    process.exit(0);
  }

  for (const inputPath of files) {
    const outputPath = `${inputPath.slice(0, -path.extname(inputPath).length)}.avif`;
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

    fs.unlinkSync(inputPath);

    console.log(`${inputPath} -> ${outputPath} (deleted original)`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

function listSourceImages(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listSourceImages(fullPath));
    } else if (
      entry.isFile() &&
      sourceExtensions.has(path.extname(fullPath).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }
  return files;
}
