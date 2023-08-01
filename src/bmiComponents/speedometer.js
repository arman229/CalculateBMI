import React, {useEffect, useRef, useState} from 'react';
import ReactSpeedometer, {Transition} from 'react-d3-speedometer';
import {MyCardSpeedo} from "./MyCard";

const MyCustomSpeedometer = ({bmi}) => {
    var text = `Enter required input   `

console.log("bmi:" + bmi)
    function mapValueToRange(value, originalMin, originalMax, targetMin, targetMax) {
        const normalizedValue = (value - originalMin) / (originalMax - originalMin);
        return normalizedValue * (targetMax - targetMin) + targetMin;
    }

    let mappedValue;
    if (bmi > 0 && bmi < 18.5) {
        mappedValue = mapValueToRange(bmi, 0, 18.5, 0, 20);
        text = `YOUR BMI IS ${bmi}`
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        mappedValue = mapValueToRange(bmi, 18.5, 24.9, 20, 40);
        text = `YOUR BMI IS ${bmi}`
    } else if (bmi >= 25 && bmi <= 29.9) {
        mappedValue = mapValueToRange(bmi, 25, 29.9, 40, 60);
        text = `YOUR BMI IS ${bmi}`
    } else if (bmi >= 30 && bmi <= 34.9) {
        mappedValue = mapValueToRange(bmi, 30, 34.9, 60, 80);
        text = `YOUR BMI IS ${bmi}`
    } else if (bmi >= 35  && bmi <= 100) {
        mappedValue = mapValueToRange(bmi, 35, 50, 80, 100);
        text = `YOUR BMI IS ${bmi}`
        if ( mappedValue >= 50 ){
            text = `YOUR BMI IS ${bmi}`
            mappedValue = 100;}
    }

    else if (    bmi > 100) {
        text = `YOUR BMI IS ${bmi}`
        mappedValue = 100;
    }



    const cardRef = useRef(null)
    const [meterWidth, setMeterWidth] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            const width = cardRef.current.clientWidth;
            setMeterWidth(width);
        };

        handleResize(); // Call the handler initially

        window.addEventListener('resize', handleResize); // Add event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);


    return (
        <div ref={cardRef}>
            <MyCardSpeedo title={"Output"}>
                <ReactSpeedometer
                    minValue={0}
                    maxValue={100}
                    value={mappedValue === null ? 0 : mappedValue}

                    forceRender={true}
                    segmentColors={["#52aee5", "#3eaf44", "#f9b317", "#ee4537", "#e01d2a"]}
                    width={meterWidth}
                    height={300}

                    needleColor="blue"
                    needleTransitionDuration={4000}
                    needleTransition={Transition.easeElastic}
                    currentValueText={text}

                    customSegmentLabels={[
                        {
                            text: "Under weight",
                            position: "INSIDE",
                            color: "white",
                        },
                        {
                            text: "Normal",
                            position: "INSIDE",
                            color: "WHITE",

                        },
                        {

                            text: "Over Weight",
                            position: "INSIDE",
                            color: "WHITE",


                        },
                        {
                            text: "Obese",
                            position: "INSIDE",
                            color: "WHITE",
                        },
                        {
                            text: "Excessive",
                            position: "INSIDE",
                            color: "WHITE",
                        },
                    ]}
                />

            </MyCardSpeedo>
        </div>


    );
};

export default MyCustomSpeedometer;
