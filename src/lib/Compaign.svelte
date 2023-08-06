<script>
    import { page } from "$app/stores";
    import Info from "./Info.svelte";
    import DonateModal from "./DonateModal.svelte";
    import { Toaster, toast } from "svelte-sonner";
    import ContactModal from "./ContactModal.svelte";

    let role = "";
    let loginUser = "";
    if ($page.data.user) {
        role = $page.data.user.role;
        loginUser = $page.data.user.id;
    }
    const auth = $page.data.auth;

    export let owner = false;
    export let compaign;
    const {
        id,
        title,
        description,
        funded,
        expand,
        need,
        donations,
        completed,
    } = compaign;
    const { email, name } = expand.author;

    async function mark() {
        const res = await fetch(`/api/mark?id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        console.log(response);
        if (response.error) {
            toast.error(response.msg);
        }
        if (response.success) {
            toast.success(response.msg);
        }
    }
</script>

<Toaster position="top-center" expand={true} richColors />

<div
    class="card mx-auto w-80 md:w-[35rem] lg:w-[40rem] bg-primary text-primary-content my-5"
>
    <div class="card-body">
        <div class="flex items-start justify-between">
            <div>
                <h2 class="card-title capitalize mb-[-5px]">{title}</h2>
                {#if auth}
                    <small>@{name}</small>
                {/if}
            </div>
            {#if role == "admin"}
                <Info {id} />
            {/if}
        </div>
        <p>{description}</p>
        {#if funded}
            <div class="flex justify-between my-2 gap-5">
                <span class="border border-black px-2 rounded-full"
                    >Needed: {need}</span
                >
                <span
                    class="px-2 rounded-full border border-black hidden md:flex"
                    >Remaining: {need - donations}</span
                >
                <span class="px-2 rounded-full border border-black"
                    >Collected: {donations}</span
                >
            </div>
        {/if}
        {#if auth}
            <div class="card-actions justify-end mt-1">
                {#if owner && completed == false}
                    <button class="btn btn-sm md:btn-md" on:click={mark}>
                        Mark as Completed</button
                    >
                {/if}
                {#if completed == false && expand.author.id != loginUser}
                    {#if funded}
                        <DonateModal {id} authorId={expand.author.id} />
                    {/if}
                    <ContactModal {id} author={name} {email} />
                {/if}

                {#if completed == true}
                    <button class="btn btn-disabled btn-sm md:btn-md"
                        >Completed</button
                    >
                {/if}
            </div>
        {/if}
    </div>
</div>
