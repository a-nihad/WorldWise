import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id } = city;
  return (
    <div>
      <Link className={styles.cityItem} to={`${id}`} >
        <span> {emoji} </span>
        <h3> {cityName} </h3>
        <time> {formatDate(date)} </time>
        <button> x </button>
      </Link>
    </div>
  );
}

export default CityItem;
