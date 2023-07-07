// The hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

// Given two strings of equal length, calculate and return the the hamming distance.

function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }

        return result

    } else {
        throw new Error('Strings do not have equal length')
    }
}
