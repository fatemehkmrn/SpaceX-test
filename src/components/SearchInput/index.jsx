import * as React from "react"
// Styles
import styles from "./index.module.scss"

const SearchInput = ({ placeholder, onChange }) => {
    function handleInputChange(e) {
        onChange(e.target.value)
    }

    return <input className={styles["search"]} placeholder={placeholder} onChange={(e) => handleInputChange(e)} />
}

export default SearchInput