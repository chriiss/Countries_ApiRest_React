import Styles from "../../../styles/App.module.scss";

const Suggest = ({suggest, filterSuggest}) => {
    return(
        <div className={Styles.suggest}>
            {suggest && suggest.map((suggestion, i) => {
                return(
                    <div className={Styles.suggest_item} key={i} onClick={() => filterSuggest(suggestion.name.common, suggestion.region)}>
                    <img src={suggestion.flags.svg} width="25" height="25" alt="countries icon"/>
                    <span>&nbsp;{suggestion.name.common}&nbsp;</span>
                    <span>{suggestion.region}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Suggest;