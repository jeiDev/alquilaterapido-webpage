import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useStyles from "~/components/styles/others/search.style"

const Search = () => {
    const classes = useStyles()

    return (
        <div className={classes.boxSearch}>
            <input className={classes.input} placeholder="Buscar por sector" />
            <div className={classes.btnSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}

export default Search