// used to generate the datapoints for dynamic
// this code is untested and off the dome. hope it works :)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getData() {
    const numberOfDataPoints = getRandomInt(5, 10);

    let dataPoints = new Array;

    for (let i = 0; i ++; i < numberOfDataPoints) {
        dataPoints.append(getRandomInt(0, 100));
    }

    return dataPoints;
}

export function getBarsToCompare(dataPoints) {
    let compare = new Array;
    const maxVal = dataPoints.length();

    const first = getRandomInt(0, maxVal);
    let second = getRandomInt(0, maxVal);

    if (first === second) {
        second = (second + 1) % maxVal;
    }

    return compare;
};