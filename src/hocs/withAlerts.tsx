/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import useAlert from '@/hooks/useAlert';

import WithAlertType, { AlertActions } from './withAlerts.types';

const withAlerts = <T extends WithAlertType = WithAlertType>(
  component: React.FunctionComponent<T>,
) => {
  const MemoComponent = React.memo<T>(component);
  function AlertComponent(props: Omit<T, keyof WithAlertType>) {
    const { success, error, warning, info } = useAlert();

    const alert: AlertActions = useMemo(
      () => ({
        success,
        error,
        warning,
        info,
      }),
      [success, error, warning, info],
    );

    return <MemoComponent {...(props as T)} alert={alert} />;
  }
  return AlertComponent;
};

export default withAlerts;
