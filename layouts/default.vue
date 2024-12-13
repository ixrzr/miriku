<script lang="ts" setup>
const config = useAppConfig();
</script>

<template>
    <NuxtLoadingIndicator :color="config.color" />
    <UISidebar />
    <UContainer class="lg:ml-16">
        <UContainer class="space-y-6 p-4">
            <slot />
            <UIFooter />
        </UContainer>
    </UContainer>
    <UNotifications />
</template>