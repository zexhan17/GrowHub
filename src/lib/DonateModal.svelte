<script>
    import Copy from "./Copy.svelte";
    import { page } from "$app/stores";
    import { Toaster, toast } from "svelte-sonner";
    export let id;
    export let authorId;
    let t_id = "";
    let amount;
    async function saveTransaction() {
        let data = new FormData(this);
        data = Object.fromEntries(data);
        console.log(data);
        const res = await fetch("/api/saveTransaction", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        if (response.success) {
            toast.success(response.msg);
            t_id = " ";
            amount = "";
        }
        if (response.error) {
            toast.error(response.msg);
        }
    }
</script>

<Toaster position="top-center" expand={true} richColors />

<label
    for={"modal" + id}
    class="btn btn-sm md:btn-md btn-outline dark:btn-neutral">Support</label
>

<input type="checkbox" id={"modal" + id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box text-info-content">
        <form method="POST" on:submit|preventDefault={saveTransaction}>
            <h3 class="font-bold text-lg mb-3">Support the compaigner😇</h3>
            <span>Transfer amount in this account</span>
            <div class="border px-2 rounded mt-1">
                <span>Name: Muhmmad Zeeshan</span>
                <Copy title={"JazzCash Mobile Account"} value={"03096035017"} />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Enter Transaction Id</span>
                </label>
                <input
                    type="text"
                    name="t_id"
                    value={t_id}
                    required
                    class="input input-bordered w-full"
                />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Enter Amount you sent</span>
                </label>
                <input
                    value={amount}
                    type="number"
                    name="amount"
                    required
                    class="input input-bordered w-full"
                />
            </div>
            <input type="hidden" name="compaign_id" value={id} />
            <input type="hidden" name="compaigner_id" value={authorId} />
            <input type="hidden" name="donor_id" value={$page.data.user.id} />
            <input type="hidden" name="status" value={1} />
            <button class="btn btn-secondary mt-3 w-full">submit</button>
        </form>
        <div class="modal-action">
            <label for={"modal" + id} class="btn">close</label>
        </div>
    </div>
</div>
