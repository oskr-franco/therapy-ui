export type Modal<T> = {
  isOpen: boolean;
  component: (input: T) => JSX.Element;
  componentProps?: T;
};

export type ModalStoreProps<T> = Omit<Modal<T>, 'component'> & {
  component?: ((input: T) => JSX.Element) | null;
};

export type ModalProps<T> = Omit<Modal<T>, 'isOpen'>;

export default Modal;
