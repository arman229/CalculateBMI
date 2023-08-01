import React from "react";
import './bmitable.css';
import {MyCard} from "./MyCard";
import {SuggestionData} from "../data/SuggestionData";


const BmiTable = ({bmi}) => {
    var {label,min,max} = SuggestionData.getData(bmi)
    return (
        <>
            <MyCard title={"BMI Table List"}>
                <table className="bmitable" style={{margin: '10px auto', borderCollapse: "collapse"}}>
                    <tr>
                        <th>BMI</th>
                        <th> Status</th>
                    </tr>
                    <tr style={{border: (bmi > 0 && bmi < 18.5) ? '6px solid black' : 'none'}}>
                        <td> &le; 18.4</td>
                        <td>Under weight</td>
                    </tr>
                    <tr style={{border: bmi >= 18.5 && bmi <= 24.9 ? '6px solid black' : 'none'}}>
                        <td>18.5-24.9</td>
                        <td>Normal</td>
                    </tr>

                    <tr style={{border: bmi >= 25.0 && bmi <= 29.9 ? '6px solid black' : 'none'}}>
                        <td> 25.0-29.9</td>
                        <td> Over weight</td>
                    </tr>
                    <tr style={{border:bmi >= 30 && bmi <= 34.9 ? '6px solid black' : 'none'}}>
                        <td> 30-34.9</td>
                        <td>Obese</td>
                    </tr>
                    <tr style={{border: bmi >= 35  ? '6px solid black' : 'none'}}>
                        <td>&ge; 35</td>
                        <td>Execessive Obese</td>
                    </tr>
                </table>
            </MyCard>
        </>
    )
}
export {BmiTable}