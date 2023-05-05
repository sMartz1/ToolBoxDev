const typeKeys = {
    dayStep: {
        MORNING: "Morning",
        EVENING: "Evening",
        AFTER_SCHOOL: "After School",
        EARLY_MORNING: "Early Morning",
        LAUNCHTIME: "Lunchtime",
        TVWORLD: "TV World",
        DAYTIME: "Daytime",
        MIDTERMS: "Midterms",
        checkIfIsDayStep: (step) =>
            [
                "Morning",
                "Evening",
                "After School",
                "Early Morning",
                "Lunchtime",
                "TV World",
                "Daytime",
                "Midterms",
            ].includes(step),
    },
};
export default typeKeys;
