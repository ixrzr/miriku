export default (season: string): string => {
    switch (season.toLowerCase()) {
        case "spring":
            return "Spring";
        case "summer":
            return "Summer";
        case "fall":
            return "Fall";
        case "winter":
            return "Winter";
        default:
            return "TBA";
    }
}