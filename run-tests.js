// Simple test runner for calculator.js

const { calculateScore } = require('./calculator');

// Test case 1: High score (30+)
function testHighScore() {
  const formData = {
    textBack: '10',
    plans: '10',
    ghosted: '10',
    compliments: '10'
  };
  
  const result = calculateScore(formData);
  
  if (result.score !== 40) {
    console.error(`Test failed: Expected score to be 40, but got ${result.score}`);
    return false;
  }
  
  if (result.resultText !== "👑 He's a king! Lock him down!") {
    console.error(`Test failed: Expected result text to be "👑 He's a king! Lock him down!", but got "${result.resultText}"`);
    return false;
  }
  
  console.log('Test passed: High score scenario');
  return true;
}

// Test case 2: Medium score (20-29)
function testMediumScore() {
  const formData = {
    textBack: '10',
    plans: '10',
    ghosted: '0',
    compliments: '5'
  };
  
  const result = calculateScore(formData);
  
  if (result.score !== 25) {
    console.error(`Test failed: Expected score to be 25, but got ${result.score}`);
    return false;
  }
  
  if (result.resultText !== "😬 He's decent, but keep an eye on him.") {
    console.error(`Test failed: Expected result text to be "😬 He's decent, but keep an eye on him.", but got "${result.resultText}"`);
    return false;
  }
  
  console.log('Test passed: Medium score scenario');
  return true;
}

// Test case 3: Low score (0-19)
function testLowScore() {
  const formData = {
    textBack: '0',
    plans: '0',
    ghosted: '0',
    compliments: '5'
  };
  
  const result = calculateScore(formData);
  
  if (result.score !== 5) {
    console.error(`Test failed: Expected score to be 5, but got ${result.score}`);
    return false;
  }
  
  if (result.resultText !== "🚩 RUN. He is NOT worth it!") {
    console.error(`Test failed: Expected result text to be "🚩 RUN. He is NOT worth it!", but got "${result.resultText}"`);
    return false;
  }
  
  console.log('Test passed: Low score scenario');
  return true;
}

// Test case 4: Missing values
function testMissingValues() {
  const formData = {
    textBack: '10',
    // plans is missing
    ghosted: '10',
    // compliments is missing
  };
  
  const result = calculateScore(formData);
  
  if (result.score !== 20) {
    console.error(`Test failed: Expected score to be 20, but got ${result.score}`);
    return false;
  }
  
  if (result.resultText !== "😬 He's decent, but keep an eye on him.") {
    console.error(`Test failed: Expected result text to be "😬 He's decent, but keep an eye on him.", but got "${result.resultText}"`);
    return false;
  }
  
  console.log('Test passed: Missing values scenario');
  return true;
}

// Test case 5: Non-numeric values
function testNonNumericValues() {
  const formData = {
    textBack: '10abc', // Non-numeric
    plans: '10',
    ghosted: 'invalid', // Non-numeric
    compliments: '10'
  };
  
  const result = calculateScore(formData);
  
  if (result.score !== 30) {
    console.error(`Test failed: Expected score to be 30, but got ${result.score}`);
    return false;
  }
  
  if (result.resultText !== "👑 He's a king! Lock him down!") {
    console.error(`Test failed: Expected result text to be "👑 He's a king! Lock him down!", but got "${result.resultText}"`);
    return false;
  }
  
  console.log('Test passed: Non-numeric values scenario');
  return true;
}

// Run all tests
function runAllTests() {
  console.log('Running tests for calculator.js...');
  
  const testResults = [
    testHighScore(),
    testMediumScore(),
    testLowScore(),
    testMissingValues(),
    testNonNumericValues()
  ];
  
  const passedTests = testResults.filter(result => result).length;
  const totalTests = testResults.length;
  
  console.log(`\nTest summary: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('All tests passed! 🎉');
    return 0; // Success exit code
  } else {
    console.error(`${totalTests - passedTests} tests failed.`);
    return 1; // Error exit code
  }
}

// Execute the tests
runAllTests();