import { create } from "zustand";

type DashboardStore = {
  dashboard: any;
  initData: (data: any) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  dashboard: [],
  initData: (data) => set({ dashboard: data }),
}));
