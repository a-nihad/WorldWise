import styles from './City.module.css'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City({city}) {
    const {cityName, emoji, date} = city
    return (
        <div className={styles.city} >
            <span> {emoji} </span>
            <h3> {cityName} </h3>
            <time> {formatDate(date)} </time>
            <button> x </button>
        </div>
    )
}

export default City
