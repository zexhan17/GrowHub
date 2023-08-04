<script>
    import { Toaster, toast } from "svelte-sonner";
    import { enhance } from "$app/forms";
    import { fade } from "svelte/transition";

    export let form;
    let funded = false;
</script>

<div class="grid place-content-center pt-5">
    <form method="post" use:enhance class="w-72 sm:w-96 md:w-[40rem]">
        <h3 class="text-xl font-bold text-center">Create Compaign</h3>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Title</span>
            </label>
            <input
                type="text"
                name="title"
                required
                value={form?.title ?? ""}
                placeholder="Type here"
                class="input input-bordered w-full"
            />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Description</span>
            </label>
            <textarea
                required
                name="description"
                value={form?.description ?? ""}
                class="textarea textarea-bordered h-48"
                placeholder="Type here"
            />
        </div>
        <div class="form-control">
            <label class="label cursor-pointer">
                <span class="label-text">Funded</span>
                <input
                    type="checkbox"
                    name="funded"
                    bind:checked={funded}
                    value={funded}
                    class="checkbox"
                />
            </label>
        </div>
        {#if funded}
            <div transition:fade class="form-control">
                <label class="label">
                    <span class="label-text">How much money you need</span>
                </label>
                <input
                    type="number"
                    name="need"
                    value={form?.need ?? ""}
                    placeholder="Type here"
                    class="input input-bordered w-full"
                />
            </div>
        {/if}

        <div class="form-control w-full mt-5">
            <button class="btn">Create</button>
        </div>
    </form>
</div>

<Toaster position="top-center" expand={true} richColors />
<div class="hidden">
    {#if form?.error == true}
        {toast.error(form?.msg)}
    {/if}
    {#if form?.success == true}
        {toast.success(form?.msg)}
    {/if}
</div>
