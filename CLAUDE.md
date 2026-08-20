# Working in this repo

## Dev server

The dev server (`npm run dev`) usually runs on `http://localhost:8044` in a terminal that's already has open, outside of any session with Claude.

Before starting a dev server to check a change (e.g. via curl or a headless browser), check whether one is already listening on port 8044 (`lsof -ti:8044 -sTCP:LISTEN` or `curl -sf http://localhost:8044/`) and reuse it. Don't start a duplicate, and don't kill it when done — only stop a dev server you started yourself in that same check.
