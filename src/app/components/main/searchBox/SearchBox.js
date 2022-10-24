import SearchIcon from "./searchIcon/SearchIcon";

const SearchBox = ({query, handleFilterSearch}) => {
    return(
        <>
            <div>
                <SearchIcon/>
                <input type="search" value={query} onChange={handleFilterSearch} placeholder="Search Countries"/>
            </div>
        </>
    )
}

export default SearchBox;