

const SuggestionData = {
    underweight: {
        suggestions: [
            "Ensure you are consuming a balanced diet that includes an adequate amount of calories, protein, carbohydrates, and fats.",
            "Consider incorporating strength training exercises to build muscle mass and improve overall strength.",
            "Consult with a healthcare professional or registered dietitian for personalized guidance on healthy weight gain strategies.",
              "Stay hydrated by drinking enough water throughout the day.",
        ],
        label: "Underweight",
        min: 0,
        max: 18.25,
    },
    normal: {
        suggestions: [
            "Maintain a balanced diet that includes a variety of nutrient-dense foods.",
            "Engage in regular physical activity to support overall health and well-being.",
            "Focus on maintaining a healthy lifestyle, including sufficient sleep, stress management, and regular check-ups with a healthcare professional.",
            "Practice mindful eating by paying attention to your body's hunger and fullness cues.",
        ],
        label: "Normal",
        min: 18.25,
        max: 24.25,
    },
    overweight: {
        suggestions: [
            "Aim for gradual and sustainable weight loss by adopting a balanced diet and increasing physical activity levels.",
            "Incorporate more fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals.",
            "Engage in regular aerobic exercises, such as brisk walking, cycling, or swimming, to support weight loss efforts.",
            "Limit processed and sugary foods in your diet.",
        ],
        label: "Overweight",
        min: 24.25,
        max: 29.25,
    },
    obesity: {
        suggestions: [
            "Seek guidance from a healthcare professional or registered dietitian to develop a personalized weight management plan.",
            "Focus on making sustainable lifestyle changes, including a balanced diet, portion control, and regular physical activity.",
            "Consider seeking support from a healthcare professional, support groups, or behavioral therapy to address any underlying factors contributing to obesity.",
            "Set realistic goals and track your progress to stay motivated on your weight loss journey.",
        ],
        label: "Obesity",
        min: 29.25,
        max: 100.00,
    },


    getData(bmi) {
        if (bmi < 18.5) {
            return SuggestionData.underweight
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return SuggestionData.normal
        } else if (bmi >= 25 && bmi < 29.9) {
            return SuggestionData.overweight
        } else if (bmi >= 30 && bmi <= 34.9) {
            return SuggestionData.obesity
        }
    else if (bmi >= 35)  {
            return SuggestionData.obesity
        }
    },


}

export  {SuggestionData}