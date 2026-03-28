# CVF Pipeline Dashboard

A purpose-built Electron dashboard for the core-value-fundamentals pipeline.

## Install

```
cd ~/core-value-fundamentals/course/Frontend/cvf-dashboard
npm install
```

## Run

```
npm start
```

## What it does

- Launches rebuild-all.js automatically when you click ▶ LAUNCH PIPELINE
- Shows all 16 modules with live status (pending / building / passed / failed)
- Overall progress bar fills as each module completes
- Live countdown timer during rate limit waits
- Exercise grid shows Part A / Part B pass status for the current module
- Session metrics: rate limit count, Ollama fallback count, active AI
- Done overlay when the full build completes
