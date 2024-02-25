import { useTransition, animated, UseTransitionProps } from '@react-spring/web';
import { FC } from 'react';
import { createPortal } from 'react-dom';


const DEFAULT_TRANSITION_CONFIG = {
  from: { y: '100%', opacity: 0 },
  enter: { y: '0%', opacity: 1 },
  leave: { y: '140%', opacity: 0 },
  config: { tension: 170, mass: 1.7 }
};


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  transitionConfig?: UseTransitionProps
}

export const Modal: FC<ModalProps> =
  ({ isOpen, onClose, children, transitionConfig = DEFAULT_TRANSITION_CONFIG }) => {

    const transition = useTransition(isOpen, transitionConfig);

    const AnimatedModal: FC = () => transition((style, isOpen) => (
      isOpen && (
        <animated.div
          onClick={onClose}
          style={{ opacity: style.opacity }}
          className="backdrop-blur-[1px] bg-black/60 fixed w-screen h-screen z-50 flex items-center justify-center">
          <animated.div
            onClick={(e) => e.stopPropagation()}
            style={{ transform: style.y.to(y => `translateY(${y})`) }}
          >
            {children}
          </animated.div>
        </animated.div>
      )
    ));

    return (
      createPortal(<AnimatedModal />, document.getElementById('modal-root')!)
    );
  };
