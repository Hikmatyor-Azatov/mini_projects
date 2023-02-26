// test 1

const twoDArr = [
    [1, true],
    [3, "string"],
    [5, 6.5],
    [7, 8],
    [9, 10],
];

const oneDArr = twoDArr.reduce((accumulator, currentValue) =>
    accumulator.concat(currentValue)
);

console.log(oneDArr);

// test 2

const passing_score = 50;
const exam_results = [
    { subject: "Physics", marks: 41 },
    { subject: "Chemistry", marks: 59 },
    { subject: "Pure Maths", marks: 36 },
    { subject: "Applied Maths", marks: 90 },
    { subject: "English", marks: 64 },
];

let conclusion = {
    pass: [],
    fail: [],
};

const groupedResult = exam_results.reduce((accumulator, current) => {
    current.marks >= passing_score
        ? accumulator.pass.push(current)
        : accumulator.fail.push(current);
    return accumulator;
}, conclusion);

console.log(groupedResult);

// test 3

const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce(
    (accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    },
    []
);

console.log(removeDuplicatedArr);
