export type Link = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  kind: string
  tagline: string
  summary: string
  highlights: string[]
  stack: string[]
  snippet: string[]
  links: Link[]
  note?: string
}

const gh = (repo: string): Link => ({
  label: "Source",
  href: `https://github.com/rooooop5/${repo}`,
})

export const featured: Project[] = [
  {
    slug: "nanoshell",
    name: "Nanoshell",
    kind: "Systems · C",
    tagline: "A Unix shell written from scratch, with an undoable trash and a built-in LLM assistant.",
    summary:
      "Runs programs with fork/execvp, hands each child its own process group and the terminal so Ctrl+C reaches the child instead of the shell, and parses quoting properly, rejecting unclosed quotes.",
    highlights: [
      "trash: soft delete with --list, --restore and --purge, backed by an append-only log so state survives restarts",
      "nix: an LLM assistant over libcurl with session history and --model / --format / --len flags",
      "Builtins for cd (with cd - and ~), pwd, help and exit",
      "Modular core/, builtins/ and utils/ with clear memory ownership and an ASan debug build",
    ],
    stack: ["C", "POSIX", "libcurl", "cJSON", "Make", "ASan"],
    snippet: ["$ trash notes.txt", "$ trash --list", "$ trash --restore notes.txt"],
    links: [gh("Nanoshell")],
  },
  {
    slug: "shopko",
    name: "Shopko",
    kind: "Backend · Python",
    tagline: "A multi-seller marketplace API with role-based access, cart, checkout and Razorpay payments.",
    summary:
      "Checkout reserves stock, opens a Razorpay order and records a pending payment. The server verifies the HMAC-SHA256 signature, confirms capture with Razorpay, and expires unpaid checkouts after 10 minutes, putting the stock back.",
    highlights: [
      "RBAC with 4 system roles and 23 permissions, plus custom roles managed through the API",
      "Role-aware responses: the same endpoint shows admins, sellers and customers different views",
      "Seller order flow enforced as PENDING → CONFIRMED → SHIPPED → DELIVERED",
      "Fully async router → service → model layers, Docker, and 45 pytest tests run in rolled-back transactions",
    ],
    stack: ["FastAPI", "SQLAlchemy 2 (async)", "Pydantic v2", "PyJWT", "Argon2", "Razorpay", "Docker", "pytest"],
    snippet: [
      "checkout   → stock reserved, payment pending",
      "verify     → HMAC-SHA256 ok, capture confirmed",
      "10 min idle → expired, stock returned",
    ],
    links: [],
  },
  {
    slug: "codeth",
    name: "Codeth",
    kind: "AI tooling · Python",
    tagline: "A terminal coding agent for any Ollama model, with path sandboxing and approval gates.",
    summary:
      "A tool-calling loop gives the model eight tools for reading, listing, creating and editing files and running Python. Every path goes through composable sandbox checks, and overwrites or code execution stop for a y/n approval.",
    highlights: [
      "Structured ToolResult errors that tell the model how to recover",
      "Asks the model for a summary when the iteration budget runs out, instead of failing silently",
      "Dot-commands like .model=, .tokens and .verbose",
      "Rich terminal UI with syntax-highlighted approval panels",
    ],
    stack: ["Python", "Ollama", "Rich"],
    snippet: ["› overwrite_file src/app.py", "  ┌ diff preview ┐", "  approve? [y/n] y"],
    links: [gh("Codeth")],
  },
  {
    slug: "ytee",
    name: "ytee",
    kind: "CLI · Python · on PyPI",
    tagline: "Upload a video, or a whole folder of them, to YouTube from the terminal.",
    summary:
      "ytee init, set-creds (browser OAuth with token refresh), then upload --path. Uploads are resumable and chunked, with a live table of progress, speed and ETA per file.",
    highlights: [
      "Errors sorted by cause: 403 as quota, 401 as an expired token, 5xx and network errors retried",
      "Every upload logged locally, plus a migrate command for older credentials",
      "Published to PyPI from GitHub Actions with trusted publishing on tags",
    ],
    stack: ["Python", "Typer", "Rich", "YouTube Data API", "GitHub Actions"],
    snippet: ["$ pip install ytee", "$ ytee upload --path ./vlogs", "  3 files · 41% · 6.2 MB/s · ETA 2:10"],
    links: [gh("ytee"), { label: "PyPI", href: "https://pypi.org/project/ytee/" }],
  },
  {
    slug: "lightexpress",
    name: "LightExpress",
    kind: "Framework · Node.js",
    tagline: "An Express-style HTTP framework with zero dependencies and a trie router.",
    summary:
      "Built directly on Node's http module. The router is a trie where a static segment beats a :param at the same position, and middleware prefixes match whole segments, so /api never matches /apiFoo.",
    highlights: [
      "Mountable router instances",
      "JSON body parser with a size limit and distinct 413 / 400 responses",
      "res.status, send, json, set and redirect helpers",
      "Separate 404 and 405 responses, and errors from sync or async handlers become a 500",
    ],
    stack: ["Node.js", "ESM", "node:http"],
    snippet: ["app.get('/users/me', …)    // static wins", "app.get('/users/:id', …)", "GET /users/me → 200"],
    links: [gh("light-express")],
  },
  {
    slug: "attendance",
    name: "Attendance Tracker",
    kind: "Backend · Python",
    tagline: "A personal college attendance API I use every day: timetable, substitutions and stats.",
    summary:
      "Define papers and a weekly timetable, and a scheduler creates each day's attendance rows and backfills missed days. Mark a whole day or a single period, cancel a class, add extras, and record substitutions that keep the scheduled class as history.",
    highlights: [
      "Invariant that only one class is active per period",
      "Clean router, service and model layers with domain exceptions mapped to HTTP codes",
      "Overall and per-paper percentages",
      "Typed SQLAlchemy 2.0 models and a scripted SQLite backup",
    ],
    stack: ["FastAPI", "SQLAlchemy 2.0", "SQLite", "APScheduler", "Pydantic"],
    snippet: ["period 3   scheduled   kept as history", "period 3   substitute  active", "overall    per-paper   percentages"],
    links: [gh("attendance-tracker")],
    note: "Backend by me. The browser frontend was written by Codex.",
  },
]

export const zimi = {
  name: "Zimi",
  kind: "Hardware · C++",
  tagline: "Animated robot eyes on a 128×64 OLED, running on an ESP32.",
  summary:
    "Eased transitions for wake-up, blink, wink, confused, happy, sad and angry moods, drawn by masking the eye shapes, plus random glances and a wiggle. A push-button turns the robot on and off.",
  stack: ["C++", "Arduino", "ESP32", "PlatformIO", "U8g2", "Wokwi"],
  // Put a recording in public/ (e.g. "/zimi.gif") to show it instead of the drawn eyes.
  gif: undefined as string | undefined,
}

export const experiments = {
  title: "C experiments",
  items: [
    {
      name: "cstring",
      text: "An opaque, single-allocation String type for C with find, split, join, slice and case helpers, benchmarked against Python.",
      href: "https://github.com/rooooop5/cstring",
    },
    {
      name: "Clib",
      text: "Macro-generated, type-generic vector and stack, plus bracket-balancing and postfix exercises built on them.",
      href: "https://github.com/rooooop5/CLib",
    },
  ],
}
