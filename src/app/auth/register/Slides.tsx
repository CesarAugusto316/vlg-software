import { AnimatedProps, animated } from '@react-spring/web';
import { CSSProperties } from 'react';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';


type Props = AnimatedProps<{ style: CSSProperties }>


export const slides = [
  ({ style }: Props) => <animated.div style={style}><Step1 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Step2 /></animated.div>,
  ({ style }: Props) => <animated.div style={style}><Step3 /></animated.div>,
];

export const numberOfSlides = slides.length;
