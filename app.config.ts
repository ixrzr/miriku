export default defineAppConfig({
    color: "#84CC16",
    ui: {
        strategy: "override",
        primary: "lime",
        gray: "zinc",
        container: {
            base: "",
            padding: "",
            constrained: "",
        },
        input: {
            rounded: "rounded"
        },
        button: {
            rounded: "rounded"
        },
        card: {
            rounded: "rounded",
            body: {
                base: "",
                background: "",
                padding: "p-2",
            }
        },
        badge: {
            rounded: "rounded"
        },
        tooltip: {
            rounded: "rounded"
        },
        modal: {
            rounded: "rounded"
        },
        tabs: {
            list: {
                rounded: "rounded",
                tab: {
                    rounded: "rounded"
                }
            }
        },
        notification: {
            rounded: "rounded"
        }
    }
});