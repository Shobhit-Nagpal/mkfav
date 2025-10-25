# mkfav

> Convert any Lucide icon into a favicon. Fast, simple, no dependencies to manage.

Generate favicons from [Lucide's](https://lucide.dev) 5000+ icon library with a single command.

## Installation

```bash
npm install -g mkfav
```

Or use directly with `npx`:

```bash
npx mkfav --icon heart
```

## Usage

### Basic

Generate a favicon from any Lucide icon:

```bash
mkfav --icon heart
```

This creates `icon.ico` in your current directory.

### Custom filename

Specify your own output filename:

```bash
mkfav --icon folder-git-2 --output favicon
```

The `.ico` extension is added automatically if not provided.

### Full example

```bash
mkfav --icon rocket --output my-site-favicon.ico
```

## Options

| Flag | Alias | Description | Required |
|------|-------|-------------|----------|
| `--icon` | `-i` | Lucide icon name (kebab-case) | Yes |
| `--output` | `-o` | Output filename (without or with .ico) | No |
| `--version` | `-v` | Show version number | No |
| `--help` | `-h` | Show help | No |

## Icon Names

Use the kebab-case version of any icon from [lucide.dev](https://lucide.dev/icons):

- `arrow-right` → ArrowRight
- `folder-git-2` → FolderGit2
- `zap` → Zap

## How It Works

1. **Parses icon name** - Converts kebab-case to PascalCase for Lucide lookup
2. **Generates SVG** - Constructs complete SVG from Lucide's icon data
3. **Converts to PNG** - Uses Sharp to render SVG at 32x32
4. **Creates ICO** - Converts PNG to proper ICO format

All in milliseconds.

## Use Cases

- Quickly prototype favicon ideas
- Generate favicons for side projects
- Try different icons without design tools
- Automate favicon generation in build scripts

## Requirements

- Node.js >= 18

## Contributing

Issues and PRs welcome on [GitHub](https://github.com/Shobhit-Nagpal/mkfav).

## License

MIT © Shobhit Nagpal
