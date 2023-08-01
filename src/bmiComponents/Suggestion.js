import {MyCard, MyCardsuggestion} from "./MyCard";
import {Typography} from "@mui/material";
import {SuggestionData} from "../data/SuggestionData";


const Suggestion = ({bmi}) => {

    var {suggestions} = SuggestionData.getData(bmi)
    return (
        <>
            <MyCardsuggestion title={"Suggestions"}>
                <ul style={{color:"black",fontStyle:'italic'  }}>
                    <li>
                        <Typography variant={"p"}>{suggestions[0]}</Typography>
                    </li>
                    <li>
                        <Typography variant={"p"}>{suggestions[1]}</Typography>
                    </li>
                    <li>
                        <Typography variant={"p"}>{suggestions[2]}</Typography>
                    </li>
                    <li>
                        <Typography variant={"p"}>{suggestions[3]}</Typography>
                    </li>
                </ul>
            </MyCardsuggestion>
        </>
    )
}
export {Suggestion}


