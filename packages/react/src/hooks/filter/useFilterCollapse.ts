import { useState } from "react";

export const useFilterCollapse = () => {
  // State variables for managing filter collapse
  const [showFilterIcon, setShowFilterIcon] = useState(true);
  const [expanded, setExpanded] = useState(false);

  /**
   * Toggles the expanded state and updates the filter icon visibility.
   */
  const handleOpenCollapse = () => {
    setExpanded(!expanded);
    setShowFilterIcon(!showFilterIcon);
  };

  // Return necessary variables and functions
  return {
    // State Variables
    showFilterIcon, // Flag indicating whether to show the filter icon
    expanded, // Flag indicating whether the filter is expanded or collapsed

    // Event Handlers
    handleOpenCollapse, // Function to toggle filter expansion
    setExpanded, // Function to set the expanded state
  };
};
