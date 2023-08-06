<script>
    import Collapse from "./Collapse.svelte";
    import Compaign from "./Compaign.svelte";
    let id = "";
    let list = [];
    async function handleSubmit() {
        const res = await fetch(`/api/compaigns?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        if (response.error) {
            toast.error(response.msg);
        }
        list = response.compaigns;
    }
</script>

<Collapse text="Get compaign by id">
    <input
        type="text"
        required
        bind:value={id}
        class="input input-bordered w-full"
    />
    <button class="btn btn-primary mt-5 mb-3" on:click={handleSubmit}
        >Fetch</button
    >
</Collapse>

{#each list as compaign}
    <Compaign {compaign} owner={true} />
{/each}
