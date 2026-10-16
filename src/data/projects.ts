export type Link = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  kind: string
  tagline: string
  tags: string[]
  about: string
  features: string[]
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
    kind: "Terminal",
    tagline: "My own command line, built from scratch, with an AI assistant you can ask right from the prompt.",
    tags: ["C", "AI", "Systems"],
    about:
      "A shell is the program you type commands into. I wrote one from the ground up to learn how the terminal really works, then gave it things regular shells don't have, starting with a built-in AI assistant called nix.",
    features: [
      "nix: type a question and an AI model answers right in the terminal, no browser needed.",
      "It remembers the conversation, so you can ask follow-up questions.",
      "Choose the AI model, get the answer as plain text or JSON, and cap how long it can be.",
      "Delete a file by mistake? trash puts it straight back, even after a restart.",
      "Ctrl+C stops the program you're running, not the shell itself.",
    ],
    stack: ["C", "POSIX", "libcurl", "Ollama", "cJSON", "Make"],
    snippet: [
      '$ nix "how do I find large files here?"',
      '$ nix --len=50 "explain what chmod 755 does"',
      "$ trash --restore notes.txt",
    ],
    links: [gh("Nanoshell")],
  },
  {
    slug: "shopko",
    name: "Shopko",
    kind: "Online store",
    tagline: "The engine behind an online marketplace where many sellers can open shop.",
    tags: ["Python", "Payments"],
    about:
      "Shopko is the server side of a marketplace: accounts, products, carts, orders and real payments through Razorpay. It's the most complete backend I've built.",
    features: [
      "Customers browse, fill a cart and pay securely with Razorpay.",
      "Stock is held while you pay and released if you walk away.",
      "Admins, sellers and customers each get their own permissions and view.",
      "Sellers move orders from confirmed to shipped to delivered.",
      "Backed by 45 automated tests.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "Razorpay", "Docker", "pytest"],
    snippet: [
      "checkout    → stock held, payment pending",
      "pay         → verified, order confirmed",
      "10 min idle → expired, stock returned",
    ],
    links: [],
  },
  {
    slug: "codeth",
    name: "Codeth",
    kind: "AI assistant",
    tagline: "An AI coding helper that lives in your terminal and asks before it changes anything.",
    tags: ["Python", "AI"],
    about:
      "Codeth lets an AI model read and edit code in a project folder, in the style of tools like Claude Code. It works with any model from Ollama, including ones on your own machine.",
    features: [
      "Reads, creates and edits files to finish a coding task.",
      "Stays inside the folder you give it.",
      "Stops and asks you before overwriting a file or running code.",
      "Sums up what it did if it runs out of steps.",
    ],
    stack: ["Python", "Ollama", "Rich"],
    snippet: ["› overwrite_file src/app.py", "  ┌ preview ┐", "  approve? [y/n] y"],
    links: [gh("Codeth")],
  },
  {
    slug: "ytee",
    name: "ytee",
    kind: "Published tool",
    tagline: "Upload one video, or a whole folder of them, to YouTube with a single command.",
    tags: ["Python", "On PyPI"],
    about:
      "I got tired of uploading videos one by one through the browser, so I built a tool for it and published it so anyone can install it.",
    features: [
      "Sign in with Google once and you're set.",
      "Shows live progress, speed and time left for every video.",
      "Big uploads go up in chunks, and dropped connections are retried.",
      "Install it with: pip install ytee",
    ],
    stack: ["Python", "Typer", "Rich", "YouTube API", "GitHub Actions"],
    snippet: ["$ pip install ytee", "$ ytee upload --path ./vlogs", "  3 videos · 41% · ETA 2:10"],
    links: [gh("ytee"), { label: "PyPI", href: "https://pypi.org/project/ytee/" }],
  },
  {
    slug: "lightexpress",
    name: "LightExpress",
    kind: "Web framework",
    tagline: "My own take on Express, the popular tool for building websites with Node.js.",
    tags: ["JavaScript", "Web"],
    about:
      "To understand how web frameworks work underneath, I rebuilt a small version of Express without using any outside packages.",
    features: [
      "Sends each web address to the right piece of code.",
      "Supports middleware that runs before your pages.",
      "Reads JSON sent by forms and apps, with a size limit.",
      "Turns crashes into clean error responses.",
    ],
    stack: ["Node.js", "JavaScript"],
    snippet: ["app.get('/users/:id', …)", "app.use('/api', auth)", "GET /users/7 → 200"],
    links: [gh("light-express")],
  },
  {
    slug: "attendance",
    name: "Attendance Tracker",
    kind: "Everyday tool",
    tagline: "Keeps track of my college attendance so I always know where I stand.",
    tags: ["Python", "Daily use"],
    about:
      "I built this for myself and use it every day. It knows my weekly timetable and fills in each day's classes automatically.",
    features: [
      "Mark a whole day, or just one class.",
      "Handles cancelled classes, extra classes and substitutions.",
      "Shows attendance percentage overall and for each subject.",
      "Catches up on days I forgot to open it.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "SQLite", "APScheduler"],
    snippet: ["mark day  → every class present", "cancel    → class not counted", "stats     → overall and per subject"],
    links: [gh("attendance-tracker")],
    note: "I built the backend. The web page on top of it was written by Codex.",
  },
]

export const zimi = {
  name: "Zimi",
  kind: "Hardware",
  tagline: "A tiny robot face that blinks, glances around and shows moods.",
  summary:
    "Zimi's eyes run on a small ESP32 board with an OLED screen. It wakes up, blinks, winks, and looks happy, sad or angry. A button turns it on and off.",
  stack: ["C++", "Arduino", "ESP32"],
  // Put a recording in public/ (e.g. "/zimi.gif") to show it instead of the drawn eyes.
  gif: undefined as string | undefined,
}

export const experiments = {
  title: "Smaller experiments",
  items: [
    {
      name: "cstring",
      text: "A friendlier, safer way to work with text in C, timed against Python.",
      href: "https://github.com/rooooop5/cstring",
    },
    {
      name: "Clib",
      text: "Reusable lists and stacks for C that work with any type of data.",
      href: "https://github.com/rooooop5/CLib",
    },
  ],
}
