<script lang="ts" setup>
const links = [
    { name: "Home", icon: "i-heroicons-home-solid", path: "/" },
    { name: "Trending", icon: "i-heroicons-fire-solid", path: "/trending" },
    { name: "Random", icon: "i-heroicons-bolt-solid", path: "/" }
]
</script>

<template>
    <UContainer class="fixed hidden lg:flex flex-col justify-between items-center w-16 h-screen p-2">
        <UContainer class="flex flex-col gap-2">
            <UTooltip :text="link.name" :popper="{ placement: 'right' }" v-for="link in links">
                <UButton :to="link.path" :icon="link.icon" variant="ghost" color="white" size="lg" />
            </UTooltip>
        </UContainer>
    </UContainer>
</template>