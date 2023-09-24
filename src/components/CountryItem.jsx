import styles from './Countryitem.module.css'

function Countryitem({country}) {
    return (
        <div className={styles.countryItem} >
            <span> { country.emoji} </span>
            <span> { country.country} </span>
        </div>
    )
}

export default Countryitem
