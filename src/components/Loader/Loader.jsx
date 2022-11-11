import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeCircles
    height="100"
    width="100"
    color="#24CCA7"
    display="block"
    wrapperStyle={{
      display: 'block',
      textAlign: 'center',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor="rotating"
    innerCircleColor=""
    middleCircleColor="rotating"
  />
);
