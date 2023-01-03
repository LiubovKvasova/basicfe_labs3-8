import { useState, useEffect } from 'react';
import kyivImg from '../../../assets/Kyiv.jpg';
import './index.css';

const Image = () => {
  const [scale, setScale] = useState(1);
  const [controlSize, setControlSize] = useState(false);

  useEffect(() => {
    const image = document.querySelector(".image");
    image.style.transform = `scale(${scale})`;
  }, [scale]);

  const addImage = () => {
    const imgButton = document.querySelector(".img-button");
    imgButton.style.display = "block";
    setControlSize(true);
  };

  const removeImage = () => {
    const imgButton = document.querySelector(".img-button");

    imgButton.style.display = "none";
    setScale(1);
    setControlSize(false);
  };

  const enlargeImage = () => {
    const image = document.querySelector(".image");

    if(controlSize && scale < 1.5) {
      setScale((oldScale) => oldScale + 0.1);
    }
  };

  const reduceImage = () => {
    const image = document.querySelector(".image");

    if(controlSize && scale > 0.75) {
      setScale((oldScale) =>  oldScale - 0.1);
    }
  };

  return (
    <>
      <div className="img-button">
        <img className="image" src={kyivImg} alt="Місто Київ" width="400" />
      </div>

      <div className="buttons">
      <button className="add-img-button" onClick={addImage}>Додати</button>
      <button className="enlarge-img-button" onClick={enlargeImage}>Збільшити</button>
      <button className="reduce-img-button" onClick={reduceImage}>Зменшити</button>
      <button className="remove-img-button" onClick={removeImage}>Видалити</button>
      </div>
    </>
  );
}; 

export default Image;