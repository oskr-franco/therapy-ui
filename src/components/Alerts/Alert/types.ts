export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export type AlertType = {
  id: number;
  message: string;
  type: MessageType;
};

export default AlertType;
