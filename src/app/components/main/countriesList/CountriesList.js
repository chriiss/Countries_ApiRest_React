import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.scss";
import { Link } from "react-router-dom";

const CountriesList = ({countriesData}) => {
    const cardData = DataJson.countriesComponent.card;
    return (
        <div className={Styles.countries_list}>
            {countriesData.length > 0 ? (
                countriesData.map((data, i) => {
                    return (
                        <div className={Styles.countries_list_card} key={i}>
                            <div><img src={data.flags.svg} alt="flag" /></div>
                            <div><h2>{data.name.common}</h2></div>
                            <div><span className={Styles.bold}>{cardData.population}:</span>&nbsp;{data.population}</div>
                            <div><span className={Styles.bold}>{cardData.region}:</span>&nbsp;{data.region}</div>
                            <div><span className={Styles.bold}>{cardData.capital}:</span>&nbsp;{data.capital}</div>
                            <div><Link className={Styles.link} to={data.cca3.toLowerCase()}>{cardData.more}</Link></div>
                        </div>
                    )
                })) : (
                    <h3 className={Styles.bold}>countries not found</h3>
                )
            }
            
        </div>
    )
}


export default CountriesList;