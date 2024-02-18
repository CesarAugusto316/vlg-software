import { FC, useEffect } from 'react';
import { useSpringRef, useTransition } from '@react-spring/web';
import { AuthContainer } from '../components/AuthContainer';
import { useSlides } from './useSlidesHook';
import { slides } from './Slides';




export const Register: FC = () => {
  const index = useSlides(state => state.index);
  const direction = useSlides(state => state.direction);
  const firstRender = useSlides(state => state.firstRender);
  const setFirstRender = useSlides(state => state.setFirstRender);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: firstRender ? { opacity: 1, transform: 'translate3d(0%,0,0)' } : { opacity: 0, transform: `translate3d(${100 * direction}%,0,0)` }, // Use firstRender in from
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
    setFirstRender(); // Set firstRender to false after first render
  }, [index, transRef, setFirstRender]);


  return (
    <AuthContainer>
      {transitions((style, i) => {
        const Page = slides[i];
        return <Page style={style} />;
      })}
    </AuthContainer>
  );
};
