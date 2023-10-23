"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
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
            <div>
                <button
                    onClick={handleSortByName}
                    class="btn btn-primary mr-2"
                    //className="my-4"
                    // style={{
                    //     backgroundColor: sortBy === "name" ? "darkblue" : "blue",
                    // }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={handleSortByCategory}
                    class="btn btn-primary"
                    //className="my-4"
                    // style={{
                    //     backgroundColor: sortBy === "category" ? "darkblue" : "blue",
                    // }}
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
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};


