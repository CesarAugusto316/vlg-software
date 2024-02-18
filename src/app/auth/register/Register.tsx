import { CSSProperties, FC, useEffect, useState } from 'react';
import { AnimatedProps, animated, useSpringRef, useTransition } from '@react-spring/web';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { AuthContainer } from '../components/AuthContainer';


type Props = AnimatedProps<{ style: CSSProperties }>


const slides = [
  ({ style }: Props) => <animated.div style={style}><Step1 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Step2 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Step3 /></animated.div>,
];


export const Register: FC = () => {
  const [index, set] = useState(0);
  const [direction, setDirection] = useState(1); // Add state for direction
  const [firstRender, setFirstRender] = useState(true); // Add state for first render


  const onNextSlide = () => {
    setDirection(1); // Set direction to 1 when going to next slide
    set(state => (state + 1) % 3);
  };

  const onPrevSlide = () => {
    setDirection(-1); // Set direction to -1 when going to previous slide
    set(state => (state - 1 + 3) % 3); // Add 3 to avoid negative modulo
  };

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: firstRender ? { opacity: 1, transform: 'translate3d(0%,0,0)' } : { opacity: 0, transform: `translate3d(${100 * direction}%,0,0)` }, // Use firstRender in from
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  });


  useEffect(() => {
    transRef.start();
    setFirstRender(false); // Set firstRender to false after first render
  }, [index, transRef]);


  return (
    <AuthContainer>
      <div className="flex flex-col gap-8">

        {transitions((style, i) => {
          const Page = slides[i];
          return <Page style={style} />;
        })}

        <div className="flex gap-10">
          <button className="btn-primary" onClick={onPrevSlide}>Prev</button>
          <button className="btn-primary" onClick={onNextSlide}>Next</button>
        </div>
      </div>
    </AuthContainer>
  );
};
