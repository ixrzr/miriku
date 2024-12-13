<script lang="ts" setup>
const { data } = await useFetch("/api/trending", { query: { page: 1, limit: 16 } })
</script>

<template>

    <Head>
        <Title>Miriku - Trending</Title>
    </Head>
    <Cards title="Trending Now" :data="data" />
</template>