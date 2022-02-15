import styles from '../styles/SearchBar.module.css'

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.coinSearchContainer}>
            <input className={styles.coinSearchInput} {...rest} />
        </div>
    )
}

export default SearchBar
