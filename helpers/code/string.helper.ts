export const splitLinearJumps = (string: String = "") : Array<string> => {
    let split = string.split('\n');
    let cleanEmpty = (split.filter(text => ((text.trim()).length)));
    let cleanBlanks = cleanEmpty.reduce((a: Array<String>, b: String) => {
        a.push(b.trim())
        return a;
    }, [])

    //@ts-ignore
    return cleanBlanks;
}