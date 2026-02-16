// used to generate the datapoints for dynamic
// this code is untested and off the dome. hope it works :)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getData() {
    const numberOfDataPoints = getRandomInt(5, 10);

    let dataPoints = [];

    for (let i = 0; i < numberOfDataPoints; i++) {
        dataPoints.push(getRandomInt(0, 100));
    }

    return dataPoints;
}

export function getBarsToCompare(dataPoints) {
    let compare = [];
    const maxVal = dataPoints.length;

    const first = getRandomInt(0, maxVal);
    let second = getRandomInt(0, maxVal);

    if (first === second) {
        second = (second + 1) % maxVal;
    }
    compare.push(first)
    compare.push(second)

    return compare;
};