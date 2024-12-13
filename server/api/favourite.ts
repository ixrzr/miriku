export default defineEventHandler(async (event) => {
    const { page, limit } = getQuery(event);
    const query = `query {
        Page (page: ${page}, perPage: ${limit}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: FAVOURITES_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                season
                seasonYear
            }
        }
    }`
    const { data }: any = await $fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
    });
    return { pagination: data.Page.pageInfo, data: data.Page.media }
});