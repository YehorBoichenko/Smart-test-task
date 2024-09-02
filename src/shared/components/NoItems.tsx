/**
 * A functional React component that displays a message indicating
 * that no items were found. It includes a title, a message, and a suggestion.
 */
import React from 'react';

export const NoItems = () => {
  return (
    <div className="noItemsContainer">
      <h1 className="noItemsTitle">Oops!</h1>
      <p className="message">Sorry, No items found....</p>
      <p className="suggestion">Try another variant</p>
    </div>
  );
};


