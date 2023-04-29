const typeKeys = {
    dayStep: {
        MORNING: "Morning",
        EVENING: "Evening",
        AFTER_SCHOOL: "After School",
        EARLY_MORNING: "Early Morning",
        checkIfIsDayStep: (step) =>
            ["Morning", "Evening", "After School", "Early Morning"].includes(
                step
            ),
    },
};
export default typeKeys;
