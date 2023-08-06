<script>
    import { Toaster, toast } from "svelte-sonner";
    import Collapse from "./Collapse.svelte";

    let email = "";
    let password = "";
    let passwordConfirm = "";

    async function handleSubmit() {
        let data = new FormData(this);
        data = Object.fromEntries(data);
        const res = await fetch("/api/createadmin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        if (response.success) {
            toast.success(response.msg);
            email = " ";
            password = "";
            passwordConfirm = "";
        }
        if (response.error) {
            toast.error(response.msg);
        }
    }
</script>

<Toaster position="top-center" expand={true} richColors />

<Collapse text="Create New Admin">
    <form
        method="POST"
        on:submit|preventDefault={handleSubmit}
        class="space-y-4"
    >
        <input
            type="text"
            bind:value={email}
            name="email"
            placeholder="Enter email"
            class="input input-bordered w-full block"
        />
        <input
            type="password"
            name="password"
            bind:value={password}
            placeholder="Enter password, minimum length 8 "
            class="input input-bordered w-full block"
        />
        <input
            type="password"
            name="passwordConfirm"
            bind:value={passwordConfirm}
            placeholder="Enter password, minimum length 8 "
            class="input input-bordered w-full block"
        />
        <input type="hidden" name="role" value="admin" />
        <input type="hidden" name="active" value="true" />
        <button class="btn btn-primary">Create</button>
    </form>
</Collapse>
