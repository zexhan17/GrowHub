<script>
    import { Toaster, toast } from "svelte-sonner";
    import Collapse from "./Collapse.svelte";

    let donor_id = "";
    let compaigner_id = "";
    let compaign_id = "";
    let amount = "";
    let t_id = "";

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
            donor_id = "";
            compaigner_id = "";
            compaign_id = "";
        }
        if (response.error) {
            toast.error(response.msg);
        }
    }
</script>

<Toaster position="top-center" expand={true} richColors />

<Collapse text="Make Manual transaction record">
    <form
        method="POST"
        on:submit|preventDefault={saveTransaction}
        class="space-y-4"
    >
        <input
            type="text"
            bind:value={amount}
            name="amount"
            placeholder="Enter amount"
            class="input input-bordered w-full block"
        />
        <input
            type="text"
            name="compaign_id"
            bind:value={compaign_id}
            placeholder="Enter compaign id "
            class="input input-bordered w-full block"
        />
        <input
            type="text"
            name="compaigner_id"
            bind:value={compaigner_id}
            placeholder="Enter compaigner id"
            class="input input-bordered w-full block"
        />
        <input
            type="text"
            name="donor_id"
            bind:value={donor_id}
            placeholder="Enter donor id"
            class="input input-bordered w-full block"
        />
        <input
            type="text"
            name="t_id"
            bind:value={t_id}
            placeholder="Enter transaction id"
            class="input input-bordered w-full block"
        />

        <button class="btn btn-primary">Create</button>
    </form>
</Collapse>
