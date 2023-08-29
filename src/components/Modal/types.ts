export type Modal = {
  isOpen: boolean;
  component: React.ReactNode;
  componentProps: Record<string, unknown>;
};
