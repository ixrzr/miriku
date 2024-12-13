<script lang="ts" setup>
const currentYear = new Date().getFullYear();
const links = [
    { icon: "i-heroicons-information-circle-solid", path: "/dmca", target: "_self" },
    { icon: "i-mdi-github", path: "https://github.com/ixrzr/miriku", target: "_blank" }
]
</script>

<template>
    <UContainer class="flex justify-between items-center">
        <UParagraph class="text-sm">©{{ currentYear }}, Miriku</UParagraph>
        <UContainer class="flex items-center gap-2">
            <UButton :to="link.path" :target="link.target" :icon="link.icon" variant="ghost" v-for="link in links" />
        </UContainer>
    </UContainer>
</template>