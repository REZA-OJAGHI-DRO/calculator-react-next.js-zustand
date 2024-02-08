import { create } from 'zustand'

const useStore = create((set) => ({
  x: '',
  p1:'',
  d:0,
  p2:'',
  x1: () => set((state) => ({ x:state.x + '1' })),
  x2: () => set((state) => ({ x:state.x + '2' })),
  x3: () => set((state) => ({ x:state.x + '3' })),
  x4: () => set((state) => ({ x:state.x + '4' })),
  x5: () => set((state) => ({ x:state.x + '5' })),
  x6: () => set((state) => ({ x:state.x + '6' })),
  x7: () => set((state) => ({ x:state.x + '7' })),
  x8: () => set((state) => ({ x:state.x + '8' })),
  x9: () => set((state) => ({ x:state.x + '9' })),
  x0: () => set((state) => ({ x:state.x + '0' })),
  xm: () => set((state) => ({ x:state.x*-1})),
  xa: () => set((state) => ({ x:state.x+'.' })),
  xc: () => set((state) => ({ x:state.x='',p1:state.p1='' ,p2:state.p2='' })),
  xce:()=>set((state)=>({x:Math.floor(state.x/10)})),
  xp: () => set((state) => ({ p1:state.x , x:state.x='',d:state.d= 1,p2:state.p2='+' })),
  xmm: () => set((state) => ({ p1:state.x , x:state.x='',d:state.d= 2,p2:state.p2='-' })),
  xd: () => set((state) => ({ p1:state.x , x:state.x='',d:state.d= 3,p2:state.p2='/' })),
  xz: () => set((state) => ({ p1:state.x , x:state.x='',d:state.d= 4,p2:state.p2='*' })),
  xt:(j)=>set({x:j})
}))
export default useStore