import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "@mui/material";
import React, {useState} from "react";
import {VerticalSpace} from "./VerticalSpace";
import {MyCard} from "./MyCard";
import {CalculateBMI} from "../data/BmiCalculator";

const BmiInput = ({onBmi}) => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [weightError, setWeightError] = useState(false);
    const [heightError, setHeightError] = useState(false);
    const [ageGroup, setAgeGroup] = useState("");
    const [ageGroupError, setAgeGroupError] = useState(false);
    const [weightUnit, setWeightUnit] = useState("");
    const [weightUnitError, setWeightUnitError] = useState(false);
    const [heightUnit, setHeightUnit] = useState("");
    const [heightUnitError, setHeightUnitError] = useState(false);

    const calculateBmi = () => {
        if (weight === "" || height === "" || ageGroup === "" || weightUnit === "" || heightUnit === "") {
            setWeightError(weight === "");
            setHeightError(height === "");
            setAgeGroupError(ageGroup === "");
            setWeightUnitError(weightUnit === "");
            setHeightUnitError(heightUnit === "");
            onBmi(null);
            return;
        }

        let heightValue = parseFloat(height);
        let weightValue = parseFloat(weight);
        const findBmi = CalculateBMI(weightValue, weightUnit, heightValue, heightUnit);

        setWeightError(false);
        setHeightError(false);
        setAgeGroupError(false);
        setWeightUnitError(false);
        setHeightUnitError(false);
        onBmi(findBmi);
    };

    const clearValues = () => {
        setWeight("");
        setHeight("");
        onBmi(null);
        setWeightError(false);
        setHeightError(false);
        setAgeGroup("");
        setAgeGroupError(false);
        setWeightUnit("");
        setWeightUnitError(false);
        setHeightUnit("");
        setHeightUnitError(false);
    };


    return (
        <>
            <MyCard title={"Your Inputs"}>
                <FormControl fullWidth={true} error={ageGroupError}>
                    <InputLabel id="age_group_label">Age group</InputLabel>
                    <Select
                        id="age_group_select"
                        label={"Age group"}
                        labelId={"age_group_label"}
                        value={ageGroup}
                        onChange={(event) => setAgeGroup(event.target.value)}
                        required
                    >
                        <MenuItem value={""} disabled>
                            Select age group
                        </MenuItem>
                        <MenuItem value={"child"}>Child</MenuItem>
                        <MenuItem value={"teen"}>Teen</MenuItem>
                        <MenuItem value={"adult"}>Adult</MenuItem>
                        <MenuItem value={"older"}>Older</MenuItem>
                    </Select>
                    {ageGroupError &&
                        <span style={{color: "rgb(211 47 47)", fontSize: '.75em'}}>Age group is required</span>}
                </FormControl>
                <VerticalSpace/>
                <div style={{display: "flex"}}>
                    <TextField
                        id="weight"
                        type="number"
                        value={weight}

                        onChange={(event) => {
                            let inputValue = event.target.value;
                            const floatValue = parseFloat(inputValue);
                            if ((floatValue > 0 && floatValue <= 1400) || isNaN(floatValue)) {
                                setWeight(inputValue)
                            }
                        }}
                        labelId={"weight_label"}
                        style={{flexGrow: 1, marginRight: 8}}
                        label={"Weight"}
                        error={weightError}
                        inputProps={{
                            step: "any",
                        }}
                        helperText={weightError ? "Weight is required" : ""}
                    />

                    <FormControl style={{width: 180}} error={weightUnitError}>
                        <InputLabel id="weight_unit_label">Weight Unit</InputLabel>
                        <Select
                            id="weight_unit_select"
                            label={"Weight Unit"}
                            labelId={"weight_unit_label"}
                            value={weightUnit}
                            onChange={(event) => setWeightUnit(event.target.value)}
                            required>
                            <MenuItem value={""} disabled>
                                Select weight unit
                            </MenuItem>
                            <MenuItem value={"kilogram"}>Kilogram</MenuItem>
                            <MenuItem value={"pound"}>Pound</MenuItem>
                        </Select>
                        {weightUnitError &&
                            <span style={{color: "rgb(211 47 47)", fontSize: '.75em'}}>Weight unit is required</span>}
                    </FormControl>
                </div>
                <VerticalSpace/>
                <div style={{display: "flex"}}>


                    <TextField
                        id="height"
                        type="number"
                        value={height}
                        onChange={(event) => {
                            let inputValue = event.target.value;
                            const floatValue = parseFloat(inputValue);
                            if ((floatValue > 0 && floatValue <= 300)|| isNaN(floatValue)) {
                                setHeight(inputValue)
                            }
                        }}
                        labelId={"height_label"}
                        style={{flexGrow: 1, marginRight: 8}}
                        label={"Height"}
                        inputProps={{
                            step: "any",
                        }}
                        error={heightError}
                        helperText={heightError ? "Height is required" : ""}
                    />

                    <FormControl style={{width: 180}} error={heightUnitError}>
                        <InputLabel id="height_unit_label">Height Unit</InputLabel>
                        <Select
                            id="height_unit_select"
                            label={"Height Unit"}
                            labelId={"height_unit_label"}
                            value={heightUnit}
                            onChange={(event) => setHeightUnit(event.target.value)}
                            required
                        >
                            <MenuItem value={""} disabled>
                                Select height unit
                            </MenuItem>
                            <MenuItem value={"centimeters"}>Cm</MenuItem>
                            <MenuItem value={"inches"}>Inch</MenuItem>
                            <MenuItem value={"feet"}>Feet</MenuItem>
                            <MenuItem value={"meters"}>Meter</MenuItem>
                        </Select>
                        {heightUnitError &&
                            <span style={{color: "rgb(211 47 47)", fontSize: '.75em'}}>Height unit is required</span>}
                    </FormControl>
                </div>
                <VerticalSpace/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button variant={"outlined"} onClick={clearValues}>
                        Clear
                    </Button>
                    <Button variant={"contained"} onClick={calculateBmi}>
                        Calculate
                    </Button>
                </div>
            </MyCard>
        </>
    );
};

export {BmiInput};
