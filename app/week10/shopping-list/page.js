"use client";
import Link from "next/link";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Import useUserAuth hook
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";

function Page() {
  const { user } = useUserAuth(); // Get user from useUserAuth hook
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState([]);
  const [numberOfMeals, setNumberOfMeals] = useState(0);

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uD000-\uDFFF]|\uD83D[\uDC00-\uDE4F]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = async (newItem) => {
    try {
      const newItemWithId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, newItemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const loadItems = async () => {
    try {
      const result = await getItems(user.uid);
      setItems(result);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  // Check if the user is logged in
  if (!user) {
    // Render a message or redirect to login page
    return (
      <div>
        <p>Please log in to view the shopping list.</p>
        <Link href="/week10">Back to Login</Link>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 mb-4 py-4 px-8 rounded flex">
      <div>
        <Link href="/" className="font-bold">
          Home
        </Link>
        <h1 className="text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas
        ingredient={selectedItemName}
        updateNumberOfMeals={setNumberOfMeals}
      />
    </main>
  );
}

export default Page;
