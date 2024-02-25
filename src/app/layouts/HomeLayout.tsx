import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { animated, useTransition } from '@react-spring/web';
import { useVlgStore } from '../../vlgStore/vlgStore';



export const HomeLayout: FC = () => {
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);

  const transition = useTransition(accessToken, {
    // from: { opacity: 0, transform: 'translate3d(0, 3%, 0)' },
    // enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    // leave: { opacity: 0, transform: 'translate3d(0, -3%, 0)' },
    from: { y: '3%', opacity: 0 },
    enter: { y: '0%', opacity: 1 },
    leave: { y: '3%', opacity: 0 },
    config: { mass: 1.4, tension: 210 },
  });

  return transition((style, item) => (
    item &&
    <div className="text-[15px] overflow-hidden bg-white">
      <animated.div style={style}>
        <div className="flex h-screen">
          <Sidebar />

          <main className="flex-1 flex flex-col">
            <Navbar />

            <div className="p-8 flex-1 overflow-auto text-sm">
              <Outlet />
            </div>
          </main>
        </div>
      </animated.div>
    </div>
  ));
};
