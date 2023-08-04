<script>
    import Collapse from "./Collapse.svelte";

    async function handleSubmit() {
        const res = await fetch("/api/createadmin", {
            method: "POST",
            body: data,
        });
        const data = await res.json();
        console.log(data);
    }
</script>

<Collapse text="Create New Admin">
    <form
        method="POST"
        on:submit|preventDefault={handleSubmit}
        class="space-y-4"
    >
        <input
            type="text"
            placeholder="Enter email"
            class="input input-bordered w-full block"
        />
        <input
            type="text"
            placeholder="Enter password"
            class="input input-bordered w-full block"
        />
        <button class="btn btn-primary">Assign</button>
    </form>
</Collapse>
