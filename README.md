# Error Screamer - FAAAH! 🚨

A hilarious VS Code extension that screams "FAAAAAAH!!!" whenever an error appears in your terminal!

## Features

- 🎺 **Detects Errors** - Automatically identifies errors, warnings, exceptions, and crashes
- 🔊 **Screams FAAAH** - Displays visual and audio alerts
- 🔴 **Red Flash Effect** - Editor flashes red when errors detected
- 📢 **Status Bar Alert** - Shows dramatic status bar notification
- 🎮 **Toggle Command** - Turn screaming on/off anytime

## Installation

### From Source

1. Clone or download this repository
2. Open the folder in VS Code
3. Press `F5` to launch the extension in debug mode
4. Or run:
   ```bash
   npm install
   npm run compile
   ```

### Package as VSIX

```bash
npm install -g vsce
vsce package
```

This creates `error-screamer-0.0.1.vsix` that you can install directly.

## Usage

1. Open a terminal in VS Code
2. Run code that produces errors
3. Watch as the extension screams! 🚨

### Commands

- **Error Screamer: Toggle Screaming** - Enable/disable error detection
  - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
  - Search for "Toggle Error Screaming"

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch

# Run in debug mode
Press F5 in VS Code
```

## Requirements

- VS Code 1.85.0+
- Node.js 16+

## License

MIT

## Author

sarva26081993

---

**Disclaimer**: This extension is meant for entertainment purposes. Use at your own risk in shared environments! 🎉