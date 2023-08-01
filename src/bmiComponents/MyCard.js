
import {Card,   Typography} from "@mui/material";
import React from "react";

export const MyCard = (props) => {
    const headerColor = "rgb(63 81 181 / 70%)";
    const veticalPadding = {paddingTop: 8, paddingBottom: 8, backgroundColor: headerColor}

    return <>
        <Card style={{ padding:"0px",  boxShadow: '5px 5px 10px #888888' ,color:"white",minHeight:368}}>
            <Typography style={veticalPadding} variant={"h6"} fontWeight={"bolder"}
                        textAlign={"center"}>{props.title}</Typography>

            <div style={{padding: 16}}>
                {props.children}
            </div>
        </Card>
    </>
}



export const MyCardsuggestion = (props) => {
    const headerColor = "rgb(63 81 181 / 70%)";
    const veticalPadding = {paddingTop: 8, paddingBottom: 8, backgroundColor: headerColor}

    return <>
        <Card style={{ padding:"0px",  boxShadow: '5px 5px 10px #888888' ,color:"white",minHeight:368}}>
            <Typography style={veticalPadding} variant={"h6"} fontWeight={"bolder"}
                        textAlign={"center"}>{props.title}</Typography>

            <div style={{padding:"16px 16px 16px 0px"}}>
                {props.children}
            </div>
        </Card>
    </>
}
export const MyCardSpeedo = (props) => {
    const headerColor ="rgb(63 81 181 / 70%)";
    const veticalPadding = {paddingTop: 8, paddingBottom: 8, backgroundColor: headerColor}

    return <>
        <Card style={{  boxShadow: '5px 5px 10px #888888' ,minHeight:360,color:"white"}}>
            <Typography style={veticalPadding} variant={"h6"} fontWeight={"bolder"}
                        textAlign={"center"}>{props.title}</Typography>

            <div style={{paddingTop: 16}}>
                {props.children}
            </div>
        </Card>
    </>
}
