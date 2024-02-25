import { useTransition, animated } from '@react-spring/web';
import { FC } from 'react';
import { createPortal } from 'react-dom';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {

  const transition = useTransition(isOpen, {
    from: {
      transform: 'translate3d(0, 100%, 0)',
      opacity: 0,
    },
    enter: {
      transform: 'translate3d(0,0,0)',
      opacity: 1,
    },
    leave: {
      transform: 'translate3d(0, 100%, 0)',
      opacity: 0,
    },
    config: {
      tension: 260,
      mass: 1.50
    }
  });

  const AnimatedModal: FC = () => transition((style, isOpen) => (
    isOpen && (
      <animated.div
        onClick={onClose}
        style={{ opacity: style.opacity }}
        className="backdrop-blur-[1px] bg-black/55 fixed w-screen h-screen z-50 flex items-center justify-center">
        <animated.div
          onClick={(e) => e.stopPropagation()}
          style={style}
        // style={{ transform: style.transform.to(y => y) }}
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
