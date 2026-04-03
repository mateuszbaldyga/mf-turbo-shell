import { create } from 'zustand';

export const useGlobalStore = create<{ count: number; increment: () => void; decrement: () => void }>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
