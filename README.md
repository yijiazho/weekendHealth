// readme
We can create a frequency map to keep the track of the frequency of each character in the inputString. For each string in the dictionary, we can check if the total occurance of each character exceed what we have in the frequency map.Since the input contains lower case only, we can use a int[26] to represent the frequency of occurance of each character.
for each word in dict, loop through each chracter. index = character - 'a'. map[index] --
if the map[index] < 0 then we cannot construct this word with the character in inputString, and we add to the result.
otherwise, we can construct this string, with part of or all letters in the inputString.
Finally we return the result.

Example: 
inputString = "ate", map[0] = 1('a' - 'a'), map[19] = 1 ('t' - 'a'), map[4] = 1 ('e' - 'a')
dictionary = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]
the "ate", "eat" and "tea" can be formed by inputString
for string "dog", index for d = 'd' - 'a' = 3. map[3]-- is -1, which means "dog" is not an valid answer.
