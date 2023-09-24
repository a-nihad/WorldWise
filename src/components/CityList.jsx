import City from "./City";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your first sity by clicking on a city on the map"}
      />
    );

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
