
// it's guaranteed that input contains lower case letters only
export function findWords(inputString: string, dictionary:string[]): string[] {
    // use set to deduplicate
    const resultSet = new Set<string>();
    // corner cases
    if (inputString === '' || inputString === undefined) {
        return [] as string[];
    }
    
    const map: number[] = new Array(26).fill(0);
    const offset: number = 'a'.charCodeAt(0);
    
    // build map
    for (let i = 0; i < inputString.length; i++) {
        map[inputString.charCodeAt(i) - offset]++;
    }

    for (let s of dictionary) {
        if (s === null || s.length === 0) {
            continue;
        }
        // create a deep copy to avoid direct editing map
        const copy: number[] = [...map];
        for (let i = 0; i < s.length; i++) {
            const index: number = s.charCodeAt(i) - offset;
            // if there is not enough unused character in the copy map
            if (copy[index] === 0) {
                break;
            }
            copy[index]--;
            if (i === s.length - 1) {
                resultSet.add(s);
            }
        }
    }

    
    return Array.from(resultSet);
}

