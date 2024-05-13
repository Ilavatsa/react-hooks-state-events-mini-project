import React from "react";
import CategoryFilter from "./CategoryFilter"; // Import the CategoryFilter component

function App() {
  // Define your categories array
  const categories = ["Work", "Personal", "Shopping", "Other"];

  // Define the onButton and selectedButton functions
  const onButton = () => {
    // Define the behavior of onButton
  };

  const selectedButton = () => {
    // Define the behavior of selectedButton
  };

  return (
    <div className="App">
      {/* Render the CategoryFilter component and pass the categories, onButton, and selectedButton props */}
      <CategoryFilter 
        categories={categories}
        onButton={onButton}
        selectedButton={selectedButton}
      />
    </div>
  );
}

export default App;
