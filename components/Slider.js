import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/slider.module.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const images = ["/img/carousel1.jpg", "/img/carousel2.jpg", "/img/carousel3.jpg"];
  const handleArrow = (direction) => {
    if (direction === "l") {
      index !== 0 ? setIndex(index - 1) : setIndex(images.length - 1);
    } else {
      index !== images.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     if (index === images.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   }, 2000);
  // }, [index]);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="cover" />
      </div>
    </div>
  );
}

export default Slider;
