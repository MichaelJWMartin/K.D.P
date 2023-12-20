import React from 'react';

export const useToggle = (initialValue = false) => {
  if (typeof initialValue !== 'boolean') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = React.useState(
    initialValue
  );

  const toggleValue = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
    console.log('Toggled');
  }, []);

  return [value, toggleValue];
}
