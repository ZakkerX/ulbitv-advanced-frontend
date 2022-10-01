import { Button, ButtonTheme } from 'shared/ui/Button';
import BugIcon from 'shared/assets/icons/bug.svg';
import { useEffect, useState } from 'react';

// For testing
export const BugButton = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError((error) => !error);
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={throwError}>
      <BugIcon style={{ width: '24px' }} />
    </Button>
  );
};
