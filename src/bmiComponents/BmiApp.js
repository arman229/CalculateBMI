import React, {useState} from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {BmiInput} from "./BmiInput";
import {Suggestion} from "./Suggestion";
import MyCustomSpeedometer from "./speedometer";
import {BmiTable} from "./bmitable";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Footer} from "./footer";
import {VerticalSpace} from "./VerticalSpace";
import "./BmiApp.css"
import AppBarExample from "./header";

export default function BmiApp() {
    const [bmi, setBmi] = useState(null);

    function onBmiCalculated(value) {
        setBmi(value);
    }

    const theme = useTheme();
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const GridHanlder = () => {
        if (isExtraSmallScreen) {
            return (<>
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <BmiTable bmi={bmi}/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Suggestion bmi={bmi}/>
                </Grid>
            </>)

        } else {
            return (
                <>
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <Suggestion bmi={bmi}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <BmiTable bmi={bmi}/>
                    </Grid>
                </>
            )

        }
    }


    return (
        <>
            <AppBarExample/>
            <Container className="containerstyle" >
                <Grid container spacing={4} style={{display: "flex", justifyContent: "center", marginTop: "5px"}}>
                    <Grid item xs={12} sm={8} md={6} lg={5} >
                        <BmiInput onBmi={onBmiCalculated}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={5}>
                        <MyCustomSpeedometer bmi={bmi}/>
                    </Grid>
                    {GridHanlder()}
                </Grid>
            </Container>
            <VerticalSpace/>
            <Footer/>

        </>
    );
}
