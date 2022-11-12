import { ThreeCircles } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';
export default function Loader() {
  return (
    <div className={s.loader}>
      <ThreeCircles
        height="100"
        width="100"
        color="#24CCA7"
        display="block"
        wrapperStyle={{
          display: 'block',
          textAlign: 'center',
          left: '50%',
          right: '50%',
          top: '50%',
          bottom: '50%',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="rotating"
        innerCircleColor=""
        middleCircleColor="rotating"
      />
    </div>
  );
}
