# VS Code Configuration

This folder contains workspace settings to ensure consistent code formatting and linting across all developers.

## What's Configured

### Auto-Formatting on Save
- **Prettier** is set as the default formatter for all supported file types
- Files are automatically formatted when you save them
- Format on paste is also enabled

### ESLint Integration
- ESLint will automatically fix issues on save
- ESLint and Prettier are configured to work together without conflicts
- The `@vue/eslint-config-prettier` package ensures no rule conflicts

### Recommended Extensions
The `extensions.json` file recommends the following extensions:
- **Prettier**: Code formatter
- **ESLint**: Linting utility
- **Volar**: Vue 3 language support
- **Tailwind CSS IntelliSense**: Tailwind class autocompletion

## Manual Commands

You can also run these commands manually:

```bash
# Format all files in src/
npm run format

# Run ESLint with auto-fix
npm run lint
```

## Configuration Files

- `.prettierrc.json` - Prettier formatting rules
- `.prettierignore` - Files to exclude from formatting
- `eslint.config.js` - ESLint rules and Vue/TypeScript configuration
- `.editorconfig` - Editor-agnostic configuration
- `.vscode/settings.json` - VS Code specific settings

