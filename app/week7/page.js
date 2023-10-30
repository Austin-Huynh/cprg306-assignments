// page.js
import useState from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [numberOfMeals, setNumberOfMeals] = useState(0);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveItem = (name) => {
    setItems(items.filter((i) => i.name !== name));
  };

  const handleItemSelect = (name) => {
    var cleanedName = name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "") // Remove non-alphabet characters
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <>
      <NavBar />
      <main className="bg-gray-900 mb-4 py-4 px-8 rounded grid grid-cols-4 gap-4">
        {/* First Column */}
        <div className="col-span-1">
          <h1 className="text-white text-4xl font-bold m-4">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            onDelete={handleRemoveItem}
            onItemSelect={handleItemSelect}
            numberOfMeals={numberOfMeals}
          />
        </div>

        {/* Second Column */}
        <div className="col-span-3">
          <MealIdeas
            ingredient={selectedItemName}
            updateNumberOfMeals={setNumberOfMeals}
          />
        </div>
      </main>
    </>
  );
}


