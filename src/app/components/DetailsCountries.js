import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Styles from "../styles/App.module.scss";
import axios from 'axios';
import Nav from "./header/Nav";
import DataJson from "../data/Data.json";


const DetailsCountries = () => {
    const [details, setDetails] = useState([]);
    const detailData = DataJson.detailsComponent;
    let { name } = useParams();


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/alpha/${name}`).then(result => {
            setDetails(result.data);
        })
    }, [name])

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <section>
                    <div className={Styles.back}>
                        <Link className={Styles.link} to="/">Back</Link>
                    </div>
                    {details.map((data, i) => {
                        return (
                            <div className={Styles.detailContainer} key={i}>
                                <div className={Styles.detailContainer_bloc}>
                                    <img src={data.flags.svg} alt="flag" />
                                </div>
                                <div className={Styles.detailContainer_bloc}>
                                    <div className={Styles.detailContainer_bloc_title}>
                                        <h2>{data.name.common}</h2>
                                    </div>
                                    <div className={Styles.data_bloc}>
                                        <div>
                                            <div><span className={Styles.bold}>{detailData.nativeName}&nbsp;:&nbsp;</span>{data.name.nativeName[Object.keys(data.name.nativeName)[0]].official}</div>
                                            <div><span className={Styles.bold}>{detailData.population}&nbsp;:&nbsp;</span>{data.population}</div>
                                            <div><span className={Styles.bold}>{detailData.region}&nbsp;:&nbsp;</span>{data.region}</div>
                                            <div><span className={Styles.bold}>{detailData.subRegion}&nbsp;:&nbsp;</span>{data.subRegion}</div>

                                            <div><span className={Styles.bold}>{detailData.capital}&nbsp;:&nbsp;</span>{data.capital}</div>
                                        </div>
                                        <div>
                                            <div><span className={Styles.bold}>{detailData.topLevelDomain}&nbsp;:&nbsp;</span>{data.tld}</div>

                                            <div><span className={Styles.bold}>{detailData.currencies}&nbsp;:&nbsp;</span>{data.currencies[Object.keys(data.currencies)[0]].name}</div>
                                            <div>
                                                <span className={Styles.bold}>{detailData.languages}&nbsp;:&nbsp;</span>
                                                {data.languages[Object.keys(data.languages)[0]]}&nbsp;
                                                {data.languages[Object.keys(data.languages)[1]]}&nbsp;
                                                {data.languages[Object.keys(data.languages)[2]]}&nbsp;
                                                {data.languages[Object.keys(data.languages)[3]]}&nbsp;
                                            </div>
                                        
                                            <div><span className={Styles.bold}>{detailData.timeZone}&nbsp;:&nbsp;</span>{data.timezones}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <article>
                                            <div className={Styles.bold}>{detailData.borderCountries}&nbsp;:&nbsp;</div>
                                            <div className={Styles.bloc_link} >
                                                {data.borders ? data.borders.map((item, index) => (
                                                    <Link className={Styles.link} key={index} to={`/${item.toLowerCase()}`}>
                                                        <span>{item}</span>
                                                    </Link>
                                                )) : '-'
                                                }
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
        </>
    )
}

export default DetailsCountries;