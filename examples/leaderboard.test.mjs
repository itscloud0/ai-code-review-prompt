import test from 'node:test';
import assert from 'node:assert/strict';

// Plausible AI-generated helper under review.
function topScores(scores, limit = 3) {
  return [...scores].sort().reverse().slice(0, limit);
}

test('returns the highest scores first', () => {
  assert.deepEqual(topScores([40, 75, 62, 18]), [75, 62, 40]);
});

test('orders scores numerically across digit lengths', () => {
  assert.deepEqual(topScores([9, 100, 25, 3]), [100, 25, 9]);
});

test('does not reorder the caller\'s array', () => {
  const scores = [9, 100, 25];
  topScores(scores);
  assert.deepEqual(scores, [9, 100, 25]);
});
