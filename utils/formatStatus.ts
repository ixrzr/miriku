export default (season: string): string => {
    switch (season) {
        case "FINISHED":
            return "Finished";
        case "RELEASING":
            return "Releasing";
        case "NOT_YET_RELEASED":
            return "Not Yet";
        case "CANCELLED":
            return "Cancelled";
        case "HIATUS":
            return "Hiatus";
        default:
            return "TBA";
    }
}