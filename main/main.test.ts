import { findWords } from './main'

test('Should cover cases rearranging all the letters in input string', () => {
    const inputString: string = 'ate';
    const dictionary: string[] = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];

    const expected: string[] = ['ate', 'eat', 'tea'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should cover cases rearranging part of the letters in input string', () => {
    const inputString: string = 'ogd';
    const dictionary: string[] = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'];

    const expected: string[] = ['dog', 'do', 'god', 'go'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should handle input string with letters not present in any dictionary words', () => {
    const inputString: string = 'xyz';
    const dictionary: string[] = ['apple', 'banana', 'cherry'];

    const expected: string[] = [];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should handle input string with single character', () => {
    const inputString: string = 'a';
    const dictionary: string[] = ['apple', 'banana', 'cherry', 'a'];

    const expected: string[] = ['a'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should cover duplicate letters in input string', () => {
    const inputString: string = 'oogd';
    const dictionary: string[] = ['ate', 'eat', 'teeea', 'dog', 'do', 'god', 'goo', 'go', 'good', 'goood', 'ood', 'oood'];

    const expected: string[] = ['dog', 'do', 'god', 'goo', 'go', 'good', 'ood'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should handle overlapping characters with varying counts correctly', () => {
    const inputString: string = 'aabbc';
    const dictionary: string[] = ['ab', 'abc', 'aab', 'aabb', 'aabbc', 'aabbcc'];

    const expected: string[] = ['ab', 'abc', 'aab', 'aabb', 'aabbc'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should cover empty string in dictionary', () => {
    const inputString: string = 'abc';
    const dictionary: string[] = ['a', 'b', 'c', ''];

    const expected: string[] = ['a', 'b', 'c'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should cover empty input string', () => {
    const inputString: string = '';
    const dictionary: string[] = ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good', ''];

    const expected: string[] = [];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should cover duplicate in dictionary', () => {
    const inputString: string = 'oogd';
    const dictionary: string[] = ['ate', 'dog', 'eat', 'tea', 'dog', 'do', 'god', 'eat', 'goo', 'go', 'good'];

    const expected: string[] = ['dog', 'do', 'god', 'goo', 'go', 'good'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});

test('Should handle large input string and dictionary efficiently', () => {
    const inputString: string = 'a'.repeat(10000) + 'b'.repeat(10000) + 'c'.repeat(10000);
    const dictionary: string[] = ['abc', 'bca', 'cab', 'cba', 'a'.repeat(10001) + 'b'.repeat(10001) + 'c'.repeat(10001)];

    const expected: string[] = ['abc', 'bca', 'cab', 'cba'];
    expect(findWords(inputString, dictionary)).toStrictEqual(expected);
});