<script lang="ts" setup>
const { data } = await useAsyncData(async () => {
    const [popular, favourite] = await Promise.all([
        await $fetch("/api/popular", { query: { page: 1, limit: 8 } }),
        await $fetch("/api/favourite", { query: { page: 1, limit: 8 } })
    ]);
    return { popular, favourite }
});
</script>

<template>
    <Head>
        <Title>Miriku - Watch Anime Online</Title>
    </Head>
    <Cards title="All Time Popular" :data="data?.popular" />
    <Cards title="Most Favourite" :data="data?.favourite" />
</template>