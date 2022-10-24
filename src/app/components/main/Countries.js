import { useState, useEffect } from "react";
import SearchBox from "./searchBox/SearchBox";
import CountriesFilter from "./countriesFilter/CountriesFilter";
import CountriesList from "./countriesList/CountriesList";
import axios from "axios";
import Styles from "../../styles/App.module.scss";
import Suggest from "./suggest/Suggest";
import DataJson from "../../data/Data.json";

const Countries = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [query, setQuery] = useState("");
    const [suggest, setSuggest] = useState(null);
    const [selectInput, setSelectInput] = useState("");
    const regionList = DataJson.filterComponent.regionFilter;

    const getData = async () => {
        await axios.get("https://restcountries.com/v3.1/all").then(result => {
            setCountriesData(result.data);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const filterSuggest = (element) => {
        setSuggest([]);
        setQuery(element);
    }
    const filterSearch = (text) => {
        let matches = [];
        if(text.length > 0) {
            matches = countriesData.filter((data) => {
               const regex = new RegExp(`${text}`, "gi");
               return data.name.common.match(regex) || data.region.match(regex);
            })
        }
        setSuggest(matches);
        setQuery(text);
    }

    useEffect(() => {
        const result = countriesData.filter(country => 
        (!query || country.name.common.toLowerCase().includes(query.toLowerCase())) && (!selectInput || country.region === selectInput))

        setFilteredItems(result);
    }, [query, countriesData, selectInput])

    return(
        <section>
            <div className={Styles.componentsStyle}>
                <div className={Styles.searchBox}>
                    <SearchBox query={query} handleFilterSearch={(e) => filterSearch(e.target.value)} />
                    <Suggest suggest={suggest} filterSuggest={filterSuggest}/>
                </div>
                <div className={Styles.filter}>
                    <CountriesFilter regionList={regionList} handleSelectInput={(e) => setSelectInput(e.target.value)}/>
                </div>
                
            </div>
            <div className={Styles.countries}>
                <CountriesList countriesData={filteredItems}/>
            </div>   
        </section>
    )
}

export default Countries;