import { useState, useEffect, useCallback } from 'react';

// Hook to calculate dynamic table height
export const useDynamicTableHeight = (initialHeightDiff: number = 300) => {
  // State to store the current table height
  const [tableHeight, setTableHeight] = useState<number>(
    window.innerHeight - initialHeightDiff
  );

  // Memoize the table height calculation to avoid re-defining on every render
  const calculateTableHeight = useCallback(() => {
    const newHeight = window.innerHeight - initialHeightDiff;
    setTableHeight(newHeight > 300 ? newHeight : 300); // Set to minimum height of 300
  }, [initialHeightDiff]); // Only re-create when initialHeightDiff changes

  // Resize listener to adjust the table height dynamically when window is resized
  useEffect(() => {
    calculateTableHeight(); // Set initial height on component mount
    window.addEventListener('resize', calculateTableHeight);

    return () => {
      // Cleanup the listener when component is unmounted or changes occur
      window.removeEventListener('resize', calculateTableHeight);
    };
  }, [calculateTableHeight]); // Effect only runs when calculateTableHeight changes

  return tableHeight;
};