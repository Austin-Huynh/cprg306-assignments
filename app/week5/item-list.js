"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const handleSortByName = () => {
        setSortBy("name");
    };

    const handleSortByCategory = () => {
        setSortBy("category");
    };

    return (
        <div>
            <div>
                <button
                    onClick={handleSortByName}
                    style={{
                        backgroundColor: sortBy === "name" ? "lightblue" : "white",
                    }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={handleSortByCategory}
                    style={{
                        backgroundColor: sortBy === "category" ? "lightblue" : "white",
                    }}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

