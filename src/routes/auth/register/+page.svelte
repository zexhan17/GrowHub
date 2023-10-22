<script>
    import { Toaster, toast } from "svelte-sonner";
    import { enhance } from "$app/forms";
    import { fade } from "svelte/transition";

    let role = "";

    export let form;
</script>

<div class="grid place-content-center">
    <form
        use:enhance
        method="post"
        enctype="multipart/form-data"
        class="rounded-xl shadow-2xl p-5 w-80 md:w-96 my-5"
    >
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Name</span>
            </label>
            <input
                type="text"
                name="name"
                value={form?.name ?? ""}
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input
                type="email"
                name="email"
                value={form?.email ?? ""}
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input
                type="password"
                name="password"
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Confirm Password</span>
            </label>
            <input
                type="password"
                name="passwordConfirm"
                placeholder="Type here"
                class="input input-bordered"
            />
        </div>
        <div class="form-control w-full">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">
                <span class="label-text">Your are?</span>
            </label>
            <select
                class="select select-bordered"
                value={form?.role ?? ""}
                on:change={(e) => (role = e.target.value)}
                name="role"
            >
                <option disabled selected>Pick your category</option>
                <option value="donor">Donor</option>
                <option value="compaigner">compaigner</option>
            </select>
        </div>
        {#if role == "compaigner"}
            <div transition:fade class="space-y-3">
                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">College Roll no</span>
                    </label>
                    <input
                        type="number"
                        name="clg_roll_no"
                        value={form?.clg_roll_no ?? ""}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Account</span>
                    </label>
                    <input
                        type="text"
                        name="account"
                        value={form?.account ?? ""}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">GC Roll no</span>
                    </label>
                    <input
                        type="number"
                        name="gc_roll_no"
                        value={form?.gc_roll_no ?? ""}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Registeration no</span>
                    </label>
                    <input
                        type="number"
                        name="reg_no"
                        value={form?.reg_no ?? ""}
                        placeholder="Type here"
                        class="input input-bordered"
                    />
                </div>

                <div class="form-control w-full">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">College Card Picture</span>
                    </label>
                    <input
                        type="file"
                        value={form?.avatar ?? ""}
                        accept="image/png, image/jpeg"
                        class="file-input file-input-bordered"
                        name="avatar"
                    />
                </div>
            </div>
        {/if}
        <button class="btn w-full mt-5">Register</button>
        <div class="mt-3 ml-1">
            Already, have an account? <a class="text-info" href="/auth/login"
                >Login</a
            >
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
