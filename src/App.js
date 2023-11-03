import React, { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCheckboxChange = (itemId) => {
    // Toggle the selected state of an item
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  const handleDelete = () => {
    // Delete the selected items
    const updatedItems = items.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setItems(updatedItems);
    setSelectedItems([]);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("./photos.json")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setLoading(false);
        });
    }, 2000);
  }, []);
  return (
    <div className="">
      <div className="gellary container">
        <div className="gellary-header">
          <h1>
            {selectedItems.length ? (
              <>
                <label class="container default-checkbox">
                  <input type="checkbox" checked />
                  <span class="checkmark"></span>
                </label>
                <span>{` ${selectedItems.length} Files Selected`}</span>
              </>
            ) : (
              "Gallery"
            )}
          </h1>
          <button className="delete-btn" onClick={handleDelete}>
            delete files
          </button>
        </div>
        <div className="gellary-photos">
          {/* <Gellary items={items} setItems={setItems}></Gellary> */}
          {loading === true ? (
            "loading...."
          ) : (
            <ImageGallery
              items={items}
              setItems={setItems}
              handleCheckboxChange={handleCheckboxChange}
              selectedItems={selectedItems}
            ></ImageGallery>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
