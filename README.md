# Is He Worth It? Calculator

A simple web application that helps you determine if "he's worth it" based on a few key questions.

## Features

- Answer questions about his behavior
- Get a score and personalized recommendation
- Simple and intuitive interface

## Project Structure

- `index.html` - The main HTML file with the form and styling
- `calculator.js` - JavaScript logic for calculating scores and determining results
- `tests/calculator.test.js` - Jest test file for the calculator functionality
- `run-tests.js` - Simple test runner script for direct testing without Jest

## Testing

This project includes unit tests for the calculator functionality. The tests verify:

1. High score scenario (30+)
2. Medium score scenario (20-29)
3. Low score scenario (0-19)
4. Handling of missing values
5. Handling of non-numeric values

### Running Tests

You can run the tests in two ways:

1. Using the custom test runner:
   ```
   node run-tests.js
   ```

2. Using Jest (requires npm install):
   ```
   npm test
   ```

## Development

To set up the development environment:

1. Clone the repository
2. Install dependencies: `npm install`
3. Open `index.html` in your browser to see the application
4. Make changes to the code
5. Run tests to ensure everything works correctly