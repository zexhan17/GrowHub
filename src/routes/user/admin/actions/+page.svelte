<script>
    import Stats from "$lib/Stats.svelte";
    import AssignAdmin from "$lib/AssignAdmin.svelte";
    import ManualTransaction from "$lib/ManualTransaction.svelte";
    import UpdateStats from "$lib/UpdateStats.svelte";
    import CompaignsById from "$lib/CompaignsById.svelte";

    export let form;
    export let data;
</script>

<div class="grid place-content-center gap-5 pb-20">
    <div class="stats stats-vertical lg:stats-horizontal shadow">
        <Stats stats={data.stats} />
    </div>
    <AssignAdmin />
    <ManualTransaction />
    <UpdateStats {form} />
    <CompaignsById />
</div>
