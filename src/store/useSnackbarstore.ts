import { create } from 'zustand';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarOptions {
  message: string;
  severity?: SnackbarSeverity;
  duration?: number;
  showCloseIcon?: boolean;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
  duration: number | null;
  showCloseIcon: boolean;
  showSnackbar: (options: SnackbarOptions) => void;
  closeSnackbar: () => void;
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
  open: false,
  message: '',
  severity: 'info',
  duration: 6000,
  showCloseIcon: false,
  showSnackbar: ({
    message,
    severity = 'info',
    duration = 6000,
    showCloseIcon = false,
  }: SnackbarOptions) =>
    set({
      open: true,
      message,
      severity,
      duration,
      showCloseIcon,
    }),
  closeSnackbar: () => set({ open: false }),
}));
