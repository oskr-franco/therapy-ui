import React, { useMemo } from 'react';

import useAlert from '@/hooks/useAlert';

export const withAlerts = (component) => {
  const MemoComponent = React.memo(component);
  const AlertComponent = (props) => {
    const {
      success,
      error,
      warning,
      info,
    } = useAlert();

    const alert = useMemo(() => ({
      success,
      error,
      warning,
      info,
    }), [success, error, warning, info]);

    return <MemoComponent {...props} alert={alert} />;
  }
  return AlertComponent;
}

export default withAlerts;