# IT3040 – Assignment 1  
## Option 1: Singlish to Sinhala (Playwright Automation)

This repository contains Playwright automated test scripts created to test the **Singlish to Sinhala transliteration tool** available at:

👉 https://www.swifttranslator.com/

## Files included
- `tests/example.spec.ts`  
  Playwright test suite containing:
  - Positive functional test cases  
  - Negative / robustness test cases  
  - UI-related test case  

- `ITPM_ASSIGNMENT1_IT23626492.xlsx`  
  Completed Excel sheet with all test cases filled according to **Appendix 2 template**


## How to run
1. Install Node.js (v16 or newer recommended).
2. In the `playwright_project` folder run:
   ```bash
   npm init -y
   npm i -D @playwright/test
   npx playwright install
   ```
   Or alternatively run the guided install:
   ```bash
   npm init playwright@latest
   ```
3. Run tests:
   ```bash
   npx playwright test
   ```

## Important Notes

- The Singlish input text is entered into a **textarea** element on the website.
- The Sinhala output is displayed inside a **div element**, not a textarea.

### Selectors used in the Playwright tests:
```ts
const inputBox = page.locator('textarea');
const outputBox = page.locator(
  'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
);

