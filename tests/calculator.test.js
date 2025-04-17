const { calculateScore } = require('../calculator');

describe('calculateScore', () => {
  test('should return the correct score and result text for a high score (30+)', () => {
    const formData = {
      textBack: '10',
      plans: '10',
      ghosted: '10',
      compliments: '10'
    };
    
    const result = calculateScore(formData);
    
    expect(result.score).toBe(40);
    expect(result.resultText).toBe('👑 He\'s a king! Lock him down!');
  });
  
  test('should return the correct score and result text for a medium score (20-29)', () => {
    const formData = {
      textBack: '10',
      plans: '10',
      ghosted: '0',
      compliments: '5'
    };
    
    const result = calculateScore(formData);
    
    expect(result.score).toBe(25);
    expect(result.resultText).toBe('😬 He\'s decent, but keep an eye on him.');
  });
  
  test('should return the correct score and result text for a low score (0-19)', () => {
    const formData = {
      textBack: '0',
      plans: '0',
      ghosted: '0',
      compliments: '5'
    };
    
    const result = calculateScore(formData);
    
    expect(result.score).toBe(5);
    expect(result.resultText).toBe('🚩 RUN. He is NOT worth it!');
  });
  
  test('should handle missing values by defaulting to 0', () => {
    const formData = {
      textBack: '10',
      // plans is missing
      ghosted: '10',
      // compliments is missing
    };
    
    const result = calculateScore(formData);
    
    expect(result.score).toBe(20);
    expect(result.resultText).toBe('😬 He\'s decent, but keep an eye on him.');
  });
  
  test('should handle non-numeric values by parsing them', () => {
    const formData = {
      textBack: '10abc', // Non-numeric
      plans: '10',
      ghosted: 'invalid', // Non-numeric
      compliments: '10'
    };
    
    const result = calculateScore(formData);
    
    // parseInt('10abc') returns 10, parseInt('invalid') returns NaN which becomes 0
    expect(result.score).toBe(30);
    expect(result.resultText).toBe('👑 He\'s a king! Lock him down!');
  });
});