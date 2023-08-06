<script>
    import { page } from "$app/stores";
    import { donor, admin, compaigner } from "./routes";

    let renderItems = [];
    $: pathname = $page.url.pathname;
    const role = $page.data.user.role;

    if (role == "admin") {
        renderItems = [...renderItems, ...admin];
    } else if (role == "donor") {
        renderItems = [...renderItems, ...donor];
    } else {
        renderItems = [...renderItems, ...compaigner];
    }
</script>

{#each renderItems as item}
    <li>
        <a
            class:bg-primary={pathname == item.path}
            href={item.path}
            class="capitalize">{item.title}</a
        >
    </li>
{/each}
