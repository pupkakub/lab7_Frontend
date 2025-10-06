import React, { useState } from "react";
import vyzhnycya from "../../images/vyzhnycya.jpg"; // імпорт зображення

function Image() {
  const [imgVisible, setImgVisible] = useState(true);
  const [imgWidth, setImgWidth] = useState(300);

  return (
    <div>
      {imgVisible && (
        <img
          src={vyzhnycya}
          alt="Вижниця"
          style={{ width: imgWidth + "px", display: "block", marginBottom: "10px" }}
        />
      )}
    <div className="btn-container">
  <button onClick={() => setImgVisible(true)}>Додати</button>
  <button onClick={() => setImgWidth(imgWidth + 20)}>Збільшити</button>
  <button onClick={() => imgWidth > 20 && setImgWidth(imgWidth - 20)}>Зменшити</button>
  <button onClick={() => setImgVisible(false)}>Видалити</button>
</div>

      <p>
        Більше інформації:{" "}
        <a href="https://karpaty.rocks/vyzhnycya" target="_blank" rel="noreferrer">
          Сайт про Вижницю
        </a>
      </p>
    </div>
  );
}

export default Image;
