<script lang="ts" setup>
const { title, data } = defineProps(["title", "category", "data"]);

const handleClick = () => {
    const toast = useToast();
    toast.add({
        color: "red",
        title: "Under Development",
        description: "This feature is currently being worked on and will be available soon."
    });
}
</script>

<template>
    <UContainer class="space-y-2">
        <UContainer class="flex justify-between items-center">
            <UHeading class="text-xl font-bold">{{ title }}</UHeading>
            <UButton icon="i-heroicons-plus-small-solid" label="View More" variant="soft" @click="handleClick" />
        </UContainer>
        <UContainer class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            <ULink class="group flex flex-col gap-2" v-for="i in data.data" :key="i.id">
                <UContainer class="w-full h-full rounded overflow-hidden">
                    <NuxtImg :src="i.coverImage.extraLarge" :alt="i.title.romaji" :title="i.title.romaji"
                        class="w-full h-full rounded object-cover transition-transform group-hover:scale-110" />
                </UContainer>
                <UContainer>
                    <UParagraph class="text-sm text-start opacity-85">
                        {{ formatSeason(i.season) }} / {{ i.seasonYear }}</UParagraph>
                    <UParagraph class="text-sm text-start font-medium line-clamp-1">
                        {{ i.title.romaji }}</UParagraph>
                </UContainer>
            </ULink>
        </UContainer>
    </UContainer>
</template>