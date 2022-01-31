// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGame, renderStat } from '../utils.js';
const test = QUnit.test;

test('renderStat returns an <li>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Bob (12 Points)</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderStat({ player: 'Bob', points: 12 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderGame returns an <li>', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Game #1 - 10 Points Scored</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGame({ number: 1, totalPoints: 10 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
