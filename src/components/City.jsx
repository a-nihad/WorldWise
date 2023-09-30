import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import BackButton from "./BackButton";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();

  const { currentCity, getCity, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6> city name</h6>
        <h3>
          <span> {emoji} </span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6> you want to {cityName} on </h6>
        <p> {formatDate(date || null)} </p>
      </div>

      <div className={styles.row}>
        <h6> your notes </h6>
        <h3> {notes} </h3>
      </div>

      <div className={styles.row}>
        <h6> learn more </h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
