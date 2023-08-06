<script>
    import { enhance } from "$app/forms";
    import { Toaster, toast } from "svelte-sonner";

    export let form;
    export let data;
    let list = data.transactions;

    function convertToOnlyDate(isoString) {
        const date = new Date(isoString);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return date.toLocaleDateString(undefined, options);
    }

    let search = "";
    $: if (search) {
        list = list.filter((f) => f.t_id.includes(search));
    } else {
        list = data.transactions;
    }
</script>

<input
    type="search"
    bind:value={search}
    placeholder="Search by Transaction Id here"
    class="input input-bordered w-full mt-5 max-w-sm"
/>

<div class="overflow-x-auto mt-5 hide_scroll">
    <table class="table">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>Donor</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Compaigner Id</th>
                <th>Compaign Id</th>
                <th>Date M/D/Y</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {#if list}
                {#each list as t, i}
                    <tr class="hover">
                        <td>{i + 1}</td>
                        <td>{t.donor_id}</td>
                        <td>{t.t_id}</td>
                        <td>{t.amount}</td>
                        <td>{t.compaigner_id}</td>
                        <td>{t.compaign_id}</td>
                        <td>{convertToOnlyDate(t.created)}</td>
                        <td>
                            <form
                                class="pb-5"
                                action={t.status == 1
                                    ? "?/verify"
                                    : "?/success"}
                                method="post"
                                use:enhance
                            >
                                <input type="hidden" name="id" value={t.id} />
                                <input
                                    type="hidden"
                                    name="compaign_id"
                                    value={t.compaign_id}
                                />
                                <input
                                    type="hidden"
                                    name="compaigner_id"
                                    value={t.compaigner_id}
                                />
                                <input
                                    type="hidden"
                                    name="donor_id"
                                    value={t.donor_id}
                                />
                                <input
                                    type="hidden"
                                    name="amount"
                                    value={t.amount}
                                />
                                <button class="btn btn-xs">
                                    {#if t.status == 1}
                                        "verify transaction"
                                    {:else if t.status == 2}
                                        pending receivings
                                        <div
                                            class="dropdown dropdown-hover dropdown-left dropdown-end"
                                        >
                                            <label
                                                tabindex="0"
                                                class="btn btn-circle btn-ghost btn-xs text-info"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    class="w-4 h-4 stroke-current"
                                                    ><path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    /></svg
                                                >
                                            </label>
                                            <div
                                                tabindex="0"
                                                class="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
                                            >
                                                <div class="card-body">
                                                    <p>
                                                        {t.req_online_transfer
                                                            ? "(transfer online then click to mark as successfull transaction)"
                                                            : "(compaigner has been notified)"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    {:else}
                                        success
                                    {/if}
                                </button>
                            </form>
                        </td>
                        <td class="sm:hidden">{i + 1}</td>
                    </tr>
                {:else}
                    No Record
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
