export type AlertActions = {
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
};

type WithAlertType = {
  alert: AlertActions;
};

export default WithAlertType;
