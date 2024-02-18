import { AnimatedProps, animated } from '@react-spring/web';
import { CSSProperties } from 'react';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';


type Props = AnimatedProps<{ style: CSSProperties }>


export const slidesList = [
  ({ style }: Props) => <animated.div style={style}><Slide1 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Slide2 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Slide3 /></animated.div>,
];

export const numberOfSlides = slidesList.length;
