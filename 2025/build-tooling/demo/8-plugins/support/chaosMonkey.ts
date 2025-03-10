import type { ViteDevServer } from "vite";

interface ChaosMonkeyEntry {
  apiUrl: string;
  delay?: number;
  chaosRatio?: number;
  chaosErrors?: number[];
}

const chaosMonkey = (entries: ChaosMonkeyEntry[]) => ({
  name: "chaos-monkey",
  configureServer(server: ViteDevServer) {
    console.log("Chaos monkey is on the loose!");
    server.middlewares.use((req, res, next) => {
      const entry = entries.find((entry) => req.url?.startsWith(entry.apiUrl));
      if (!req.url || !entry) {
        return void next();
      }

      const random = Math.random();
      const delay = entry.delay ?? 0;
      const chaosErrors = entry.chaosErrors ?? [400, 401, 403, 404, 500];
      const chaosRatio = entry.chaosRatio ?? 0.1;

      if (random < chaosRatio) {
        const error = chaosErrors[Math.floor(random * chaosErrors.length)];
        console.log(`Chaos monkey strikes! HTTP ${error} ${entry.apiUrl}.`);
        setTimeout(() => {
          res.statusCode = error;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Chaos monkey strikes!" }));
        }, delay);
      } else {
        setTimeout(next, delay);
      }
    });
  },
});

export default chaosMonkey;
