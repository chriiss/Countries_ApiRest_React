const CountriesFilter = ({regionList, handleSelectInput}) => {
    return(
        <>
            <select onChange={handleSelectInput}>
                <option value="">All</option>
                {
                    regionList.map((region) => (
                        <option value={region.name} key={region.name}>{region.name}</option>
                    ))
                }
            </select>
        </>
    )
}

export default CountriesFilter;