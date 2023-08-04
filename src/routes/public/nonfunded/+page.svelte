<script>
    import { page } from "$app/stores";
    import Compaign from "$lib/Compaign.svelte";
    export let data;
</script>

<div
    class="mx-auto w-80 md:w-[35rem] lg:w-[40rem] pl-1 flex items-center justify-between"
>
    <div class="md:flex">
        <h1 class="font-bold md:text-2xl block uppercase">
            there is more than just fund raising
        </h1>
        {#if $page.data.auth && $page.data.user.role == "compaigner"}
            <a
                href="/user/create"
                class="btn btn-primary btn-sm text-xs md:btn-md md:text-md"
                >Make New Compaign</a
            >
        {/if}
    </div>
</div>
{#each data.list as compaign}
    <Compaign owner={false} {compaign} />
{:else}
    <div>No Compaigns right now</div>
{/each}
