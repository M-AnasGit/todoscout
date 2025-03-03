---
'todoscout': major
---

## Summary

This update resolves an issue with the CLI execution of `todoscout`, ensuring that the `dist/index.js` file correctly exports the necessary functions and that `bin/index.js` properly invokes them. The CLI tool is now fully functional and can be used as expected.

---

## Changes Implemented

### 1. **Fixed CLI Entry Point**

- The `src/index.ts` file now properly exports the main logic, allowing the CLI to execute commands correctly.
- The `bin/index.js` file correctly references and runs the CLI logic.

### 2. **Ensured Proper Build Configuration**

- Adjusted the build settings to generate the correct output format.

---

## Outcome

- The CLI now runs without errors and properly executes commands.
- Users can install and use the package as intended.
