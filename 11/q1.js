const squareArea = (a) => {
  return a * a;
};

const squarePerimeter = (a) => {
  return 4 * a;
};
const cubeSurfaceArea = (a) => {
  return 6 * a * a;
};
const cubeVolume = (a) => {
  return a * a * a;
};

console.log(`Area : ${squareArea(3)}`);
console.log(`Perimeter : ${squarePerimeter(3)}`);
console.log(`SurfaceArea : ${cubeSurfaceArea(3)}`);
console.log(`Volume : ${cubeVolume(3)}`);
