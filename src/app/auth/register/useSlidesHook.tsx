import { create } from 'zustand';
import { numberOfSlides } from './SlidesList';


type SlidesStore = {
  index: number;
  direction: number;
  firstRender: boolean;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  setFirstRender: () => void;
}

export const useSlides = create<SlidesStore>((set) => ({
  index: 0,
  direction: 1,
  firstRender: true,

  onNextSlide: () => {
    set({ direction: 1 }); // Set direction to 1 when going to next slide
    set(state => ({ index: (state.index + 1) % numberOfSlides }));
  },

  onPrevSlide: () => {
    set({ direction: -1 }); // Set direction to -1 when going to previous slide
    set(state => ({ index: (state.index - 1 + numberOfSlides) % numberOfSlides })); // Add 3 to avoid negative modulo
  },

  setFirstRender: () => set({ firstRender: false }),
}));
