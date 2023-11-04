import fs from 'node:fs';
import { spawn } from 'node:child_process';
import gulp from 'gulp';

// Define the watch task
function watchFiles() {
  spawn('gulp --cwd ../../ --gulpfile ./gulpfile.js serve', {
    cwd: './2024/reveal.js',
    stdio: 'inherit',
    shell: true,
  });

  /**
   * A hacky workaround for submodule's gulp not watching subdirectories.
   *
   * @see https://github.com/Esri/reveal.js/issues/25
   */
  gulp.watch(
    ['2024/**/*.html', '2024/**/*.md', '!node_modules/**'],
    gulp.series((done) => {
      const triggerFile = './trigger.html';
      fs.writeFileSync(triggerFile, triggerFile);
      setTimeout(() => fs.unlink(triggerFile, () => {}), 100);
      done(); // Signal completion
    }),
  );
}

// Export the serve task
export const serve = gulp.series(watchFiles);

// Default task for Gulp
export default serve;
