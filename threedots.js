const ages = [15, 14, 18, 19, 17];
const ages2 = [20, 25, 24, 26];
const ages3 = [31, 35, 34, 46];
// const allAges = ages.concat(ages2).concat(ages3);
// const allAges = ages.concat([13]).concat(ages2).concat([5]).concat(ages3);//add array value//>old way
// const allAges2 = [ages, 5, ages2, 10, ages3, 15]//this is unclear!
const allAges2 = [...ages, 5, ...ages2, 10, ...ages3, 15]//this is a clean code! =>Three Dots-Spread Operator;
// console.log(allAges2);

//Math.Max
const business = 650;
const minister = 450;
const shachib = 250;
// const takapoisha = [650, 450, 250];
const takapoisha = [650, 450, 890, 560, 841,];
// const maximum = Math.max(business, minister, shachib);
// const maximum = Math.max(takapoisha); // result would be "NaN"
const maximum = Math.max(...takapoisha); // spread operator---threedots(...)
// const maximum = Math.min(...takapoisha); // spread operator---threedots(...)
// const maximum = Math.min(business, minister, shachib);

console.log(maximum);