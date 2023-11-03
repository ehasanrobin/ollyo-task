import React from "react";
import { ReactSortable } from "react-sortablejs";
import gellaryImg from "../../images/gallery-svgrepo-com (1).svg";
import "./ImageGallery.css";
const ImageGallery = ({
  items,
  setItems,
  handleCheckboxChange,
  selectedItems,
}) => {
  return (
    <>
      <ReactSortable
        list={items}
        setList={setItems}
        animation={500}
        className="grid-container"
        draggable=".draggable"
      >
        {items.map((item, index) => (
          <div className="draggable img-box" draggable key={item.index}>
            <div
              className={`overlay ${
                selectedItems.includes(item.id) && "selected"
              }`}
            >
              <label class="container">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <img className="gl-img" src={item.url} alt="" />
          </div>
        ))}
        <div className={`img-box add-img`}>
          <img src={gellaryImg} alt="" />
          Add Image
        </div>
      </ReactSortable>
    </>
  );
};

export default ImageGallery;
