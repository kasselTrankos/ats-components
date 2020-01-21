const CLOCKWISE = "CW";
const COUNTER_CLOCKWISE = "CCW";

polarToCartesian = angle => ({sliderWidth, sliderRadius}) => {
  const r = sliderRadius;
  const hC = (sliderWidth / 2) + sliderRadius;
  const a = ((angle - 90) * Math.PI) / 180.0;
  const x = hC + r * Math.cos(a);
  const y = hC + r * Math.sin(a);
  return { x, y };
};

const cartesianToPolar = (x, y) => ({sliderWidth, sliderRadius}) => {
  const hC = (sliderWidth / 2) + sliderRadius;
  if (x === 0) {
    return y > hC ? 0 : 180;
  }
  else if (y === 0) {
    return x > hC ? 90 : 270;
  }
  else {
    const part1 = (Math.atan((y - hC) / (x - hC)) * 180) / Math.PI;
    const part2 = (x > hC ? 90 : 270);
    return (Math.round(part1 + part2));
  }
};

const handleMeasure = ({sliderWidth, sliderRadius, btnRadius, startDegree}) => (px, py) => {
  const center = (this.props.sliderWidth + (this.props.sliderRadius * 2)) / 2;
  this.setState({
    xCenter: px + (this.props.sliderRadius + this.props.btnRadius),
    yCenter: py + (this.props.sliderRadius + this.props.btnRadius),
    measuredBox: this.getBoxBounds(),
    circleCenter: { x: center, y: center }
  }, () => {
    if (this.props.onValueChange) {
      this.props.onValueChange(this.props.startDegree ? this.props.startDegree : 0);
    }
  });
};


// const measureLocation = (circleslider) => {
//   circleslider.measure(handleMeasure);
// };

const getRelativeAngle = angle => props => {
  const {startDegree, arcDirection} = props;
  const start = startDegree !== undefined ? startDegree : 0;
  if (angle < start) {
    return arcDirection === CLOCKWISE ? (Math.abs(360 - start) + angle) % 360 : start - angle;
  }
  return arcDirection === CLOCKWISE ? (angle - start) : (start + (360 - angle)) % 360;
};

const getOnPressAngle = (x, y) => state => props => setState => {
  const {xCenter, yCenter} = state;
  const {sliderRadius, btnRadius} = props;
  const xOrigin = xCenter - (sliderRadius + btnRadius);
  const yOrigin = yCenter - (sliderRadius + btnRadius);
  const a = (cartesianToPolar(x - xOrigin, y - yOrigin)(props));
  const relativeAngle = getRelativeAngle(a)(props);
  setState({ origin: { x: xOrigin, y: yOrigin } });

  return { angle: a, relativeAngle };
};

module.exports = {polarToCartesian, cartesianToPolar, getOnPressAngle}