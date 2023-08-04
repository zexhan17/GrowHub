<script>
    import { page } from "$app/stores";
    import { user, admin } from "./routes";

    let renderItems = [];
    $: pathname = $page.url.pathname;
    const role = $page.data.user.role;

    if (role == "admin") {
        renderItems = [...renderItems, ...admin];
    } else {
        renderItems = [...renderItems, ...user];
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
