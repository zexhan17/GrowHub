<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";
    import ImgModal from "$lib/ImgModal.svelte";

    export let data;
    export let form;

    let search;
    let list = data.users;

    $: if (search) {
        list = data.users.filter((f) => f.email.includes(search));
    } else {
        list = data.users;
    }
</script>

<input
    type="search"
    bind:value={search}
    placeholder="Search by email here"
    class="input input-bordered w-full mt-5 max-w-sm"
/>

<div class="overflow-x-auto mt-5">
    <table class="table">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>Role</th>
                <th>Name</th>
                <th>College Roll No</th>
                <th>GC Roll No</th>
                <th>Reg No</th>
                <th>Img</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#if list}
                {#each list as d, i}
                    <tr class="hover">
                        <td>{i + 1}</td>
                        <td>{d.role}</td>
                        <td>{d.name}</td>
                        <td>{d.clg_roll_no}</td>
                        <td>{d.gc_roll_no}</td>
                        <td>{d.reg_no}</td>
                        <td> <ImgModal id={d.id} avatar={d.avatar} /> </td>
                        <td>
                            <div class="flex gap-2">
                                <form
                                    action="?/accept"
                                    method="post"
                                    use:enhance
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={d.id}
                                    />
                                    <button class="btn btn-xs btn-primary">
                                        accept
                                    </button>
                                </form>
                                <form
                                    action="?/reject"
                                    method="post"
                                    use:enhance
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={d.id}
                                    />

                                    <button class="btn btn-xs btn-warning">
                                        reject
                                    </button>
                                </form>
                            </div>
                        </td>
                        <td class="sm:hidden">{i + 1}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
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
