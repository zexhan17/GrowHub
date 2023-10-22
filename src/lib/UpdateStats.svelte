<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";
    import Collapse from "./Collapse.svelte";
    export let form;
</script>

<Collapse text="Update Stats">
    <form method="POST" action="?/updateStats" use:enhance class="space-y-4">
        <input
            type="number"
            name="donations"
            placeholder="donations"
            class="input input-bordered w-full block"
        />
        <input
            type="number"
            name="needed"
            placeholder="needed"
            class="input input-bordered w-full block"
        />
        <input
            type="number"
            name="compaigns"
            placeholder="compaigns"
            class="input input-bordered w-full block"
        />
        <button class="btn btn-primary">Create</button>
    </form>
</Collapse>

<Toaster position="top-center" expand={true} richColors />
<div class="hidden">
    {#if form?.error == true}
        {toast.error(form?.msg)}
    {/if}
    {#if form?.success == true}
        {toast.success(form?.msg)}
    {/if}
</div>
