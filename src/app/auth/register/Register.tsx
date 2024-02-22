import { FC, useEffect } from 'react';
import { useSpringRef, useTransition } from '@react-spring/web';
import { AuthContainer } from '../components/AuthContainer';
import { useSlides } from './useSlidesHook';
import { slidesList } from './SlidesList';


export const Register: FC = () => {
  const index = useSlides(state => state.index);
  const direction = useSlides(state => state.direction);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: `translate3d(${100 * direction}%,0,0)` },
    // from: firstRender ? { opacity: 1, transform: 'translate3d(0%,0,0)' } : { opacity: 0, transform: `translate3d(${100 * direction}%,0,0)` }, // Use firstRender in from
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);


  return (
    <AuthContainer>
      {transitions((style, i) => {
        const Slide = slidesList[i];
        return <Slide style={style} />;
      })}
    </AuthContainer>
  );
};
