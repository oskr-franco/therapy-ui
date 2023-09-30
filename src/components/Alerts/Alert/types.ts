export type Alert = {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
};

export default Alert;
