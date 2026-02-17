export default class Question {
    constructor() {
        this.dataPoints = this.genData();
        this.indexesToCompare = this.genBarsToCompare();
    };

    judge(inputPercent) {
        return Math.log2(Math.abs(inputPercent - this.truePercent) + 0.125);
    };

    get truePercent() {
        const lesserVal = this.dataPoints[this.indexesToCompare[0]];
        const greaterVal = this.dataPoints[this.indexesToCompare[1]];
        const diffPercent = 100 * ((greaterVal - lesserVal) / greaterVal);
        return Math.round(diffPercent * 100) / 100;
    };

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    genData() {
        const numberOfDataPoints = this.randomInt(5, 10);

        let dataPoints = [];

        for (let i = 0; i < numberOfDataPoints; i++) {
            dataPoints.push(this.randomInt(0, 100));
        }

        return dataPoints;
    }

    genBarsToCompare() {
        let compare = [];
        const maxVal = this.dataPoints.length;

        // creation of point
        const first = this.randomInt(0, maxVal);
        let second = this.randomInt(0, maxVal);

        if (first === second) {
            second = (second + 1) % maxVal;
        }

        // make sure they are ordered least to greatest (or equal)
        if (this.dataPoints[first] > this.dataPoints[second]) {
            compare.push(second, first);
        }
        else {
            compare.push(first, second);
        }

        return compare;
    };
};