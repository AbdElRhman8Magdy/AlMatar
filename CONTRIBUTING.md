# Contributing to AlMatar Test Automation

Thank you for your interest in contributing to the AlMatar test automation project!

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### Setup
1. Clone the repository
```bash
git clone https://github.com/AbdElRhman8Magdy/AlMatar.git
cd AlMatar
```

2. Install dependencies
```bash
npm install
```

3. Install Playwright browsers
```bash
npx playwright install
```

4. Run tests to verify setup
```bash
npm test
```

## Development Workflow

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes
- Follow the code style guidelines below
- Write clean, maintainable code
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes
```bash
# Run all tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### 4. Commit Your Changes
Use conventional commit messages:
```bash
git commit -m "feat: add new feature"
git commit -m "fix: resolve issue with..."
git commit -m "docs: update README"
git commit -m "refactor: improve code structure"
git commit -m "test: add test for..."
```

### 5. Push and Create Pull Request
```bash
git push origin your-branch-name
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Enable strict type checking
- Avoid `any` types when possible
- Use interfaces for complex types

### Formatting
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Max line length: 120 characters

### Naming Conventions
- **Classes**: PascalCase (e.g., `HomePage`, `HotelSearchPage`)
- **Methods**: camelCase (e.g., `clickSearchButton`, `fillDestination`)
- **Variables**: camelCase (e.g., `userName`, `searchResults`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`, `API_URL`)
- **Files**: PascalCase for classes, camelCase for utilities

### Page Objects
```typescript
export default class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators as getters
  private get searchButton() {
    return this.page.getByRole('button', { name: 'Search' });
  }

  // Actions as async methods
  async clickSearch() {
    await this.searchButton.click();
  }
}
```

### Test Files
```typescript
import test from '@playwright/test';
import HomePage from '../Pages/HomePage';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    // Setup before each test
  });

  test('should do something specific', async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    
    // Act
    await homePage.performAction();
    
    // Assert
    await expect(page).toHaveTitle('Expected Title');
  });
});
```

## Best Practices

### Wait Strategies
❌ **Don't use hardcoded waits**
```typescript
await page.waitForTimeout(5000); // Bad
```

✅ **Use Playwright's auto-waiting**
```typescript
await element.click(); // Playwright waits automatically

// For page loads
await page.waitForLoadState('networkidle');

// For specific elements
await page.waitForSelector('.result-item');
```

### Locators
✅ **Prefer user-facing attributes**
```typescript
// Good
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email')
page.getByPlaceholder('Enter email')
page.getByText('Welcome')

// Acceptable
page.locator('[data-testid="submit-button"]')

// Avoid when possible
page.locator('.btn.btn-primary') // Fragile
```

### Assertions
```typescript
// Use expect from @playwright/test
import { expect } from '@playwright/test';

await expect(page).toHaveTitle('Expected Title');
await expect(element).toBeVisible();
await expect(element).toHaveText('Expected Text');
```

### Error Handling
```typescript
test('should handle errors gracefully', async ({ page }) => {
  // Test-specific timeout
  await expect(element).toBeVisible({ timeout: 10000 });
  
  // Handle optional elements
  const popup = page.locator('.popup');
  if (await popup.isVisible()) {
    await popup.click();
  }
});
```

## Project Structure

```
AlMatar/
├── .github/
│   └── workflows/        # CI/CD workflows
├── Pages/               # Page Object Models
│   ├── HomePage.ts
│   ├── HotelSearchPage.ts
│   └── FlightSearchPage.ts
├── tests/               # Test files
│   └── ToDo.spec.ts
├── playwright.config.ts # Playwright configuration
├── tsconfig.json       # TypeScript configuration
├── eslint.config.mjs   # ESLint configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Adding New Tests

### 1. Create a Page Object (if needed)
Create a new file in `Pages/`:
```typescript
// Pages/NewPage.ts
import { Page } from '@playwright/test';

export default class NewPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get someElement() {
    return this.page.getByRole('button', { name: 'Click me' });
  }

  async performAction() {
    await this.someElement.click();
  }
}
```

### 2. Create Test File
Create a new file in `tests/`:
```typescript
// tests/newFeature.spec.ts
import test from '@playwright/test';
import NewPage from '../Pages/NewPage';

test.describe('New Feature', () => {
  test('should work as expected', async ({ page }) => {
    const newPage = new NewPage(page);
    await page.goto('/');
    await newPage.performAction();
  });
});
```

### 3. Run Your New Test
```bash
npx playwright test tests/newFeature.spec.ts
```

## Testing Guidelines

### Test Structure
Follow the Arrange-Act-Assert pattern:
```typescript
test('test description', async ({ page }) => {
  // Arrange: Set up test data and state
  const homePage = new HomePage(page);
  await page.goto('/');

  // Act: Perform the action
  await homePage.search('Barcelona');

  // Assert: Verify the result
  await expect(page).toHaveURL(/search-results/);
});
```

### Test Isolation
- Each test should be independent
- Use `beforeEach` for common setup
- Don't rely on test execution order
- Clean up test data if needed

### Test Data
- Keep test data in the test file or separate data files
- Don't use production data
- Use descriptive test data

## Running Tests Locally

```bash
# Run all tests
npm test

# Run specific test file
npx playwright test tests/ToDo.spec.ts

# Run in headed mode (see browser)
npm run test:headed

# Run specific browser
npm run test:chromium

# Debug mode
npm run test:debug

# View report
npm run report
```

## Debugging

### Using Debug Mode
```bash
npm run test:debug
```
This opens the Playwright Inspector for step-by-step debugging.

### Using Console Logs
```typescript
test('debug test', async ({ page }) => {
  console.log('Current URL:', page.url());
  await page.screenshot({ path: 'debug.png' });
});
```

### Using VS Code Debugger
1. Set breakpoints in your code
2. Run "Debug Test" from VS Code testing panel

## Pull Request Guidelines

### Before Submitting
- [ ] All tests pass locally
- [ ] Code is linted (`npm run lint`)
- [ ] No console warnings or errors
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventions

### PR Description
Include:
- What changes were made
- Why the changes were needed
- How to test the changes
- Screenshots (if UI changes)
- Related issues (if any)

### Code Review
- Be respectful and constructive
- Explain your suggestions
- Be open to feedback
- Respond to comments promptly

## Questions or Issues?

If you have questions or encounter issues:
1. Check existing documentation
2. Search existing issues
3. Create a new issue with details
4. Ask in pull request comments

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing! 🎉
