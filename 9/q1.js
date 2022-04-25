const isEquilateral = (angle1, angle2, angle3) => {
  return angle1 == angle2 && angle2 == angle3 ? true : false;
};

const isIsoceles = (angle1, angle2, angle3) => {
  return (angle1 == angle2 && angle2 != angle3) ||
    (angle2 == angle3 && angle1 != angle3) ||
    (angle1 == angle3 && angle1 != angle2)
    ? true
    : false;
};

const typeOfTriangle = (angle1, angle2, angle3) => {
  switch (angle1 + angle2 + angle3) {
    case 180:
      if (isEquilateral(angle1, angle2, angle3)) return "Equilateral Triangle";
      else if (isIsoceles(angle1, angle2, angle3)) return "Isoceles Traingle";
      return "Scalene Traingle";
    default:
      return "Not a Triangle";
  }
};

console.log(typeOfTriangle(120, 30, 30));
