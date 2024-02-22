import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { animated, useTransition } from '@react-spring/web';
import { useVlgStore } from '../../vlgStore/vlgStore';



export const HomeLayout: FC = () => {
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);

  const transition = useTransition(accessToken, {
    keys: null,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 400, mass: 1, tension: 180, friction: 12 },
  });

  return transition((style, item) => (
    item &&
    <div className="text-[15px] overflow-hidden bg-white">
      <animated.div style={style}>
        <div className="flex h-screen">
          <Sidebar />

          <main className="flex-1 flex flex-col">
            <Navbar />

            <div className="p-8 flex-1">
              <Outlet />
            </div>
          </main>
        </div>
      </animated.div>
    </div>
  ));
};
