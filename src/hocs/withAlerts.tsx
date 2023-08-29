/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import useAlert from '@/hooks/useAlert';

const withAlerts = (component) => {
  const MemoComponent = React.memo(component);
  function AlertComponent(props) {
    const { success, error, warning, info } = useAlert();

    const alert = useMemo(
      () => ({
        success,
        error,
        warning,
        info,
      }),
      [success, error, warning, info],
    );

    return <MemoComponent {...props} alert={alert} />;
  }
  return AlertComponent;
};

export default withAlerts;
