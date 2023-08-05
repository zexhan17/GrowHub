<script>
    import { Toaster, toast } from "svelte-sonner";
    import { enhance } from "$app/forms";
    export let data;
    export let form;
</script>

<div class="grid place-content-center gap-4 text-center mx-5">
    <h1 class="outline md:text-xl font-bold p-2 rounded-lg">
        You can ask for online transfer in your account you added when you
        created your profile, or visit the office for cash
    </h1>
    {#if data.notifications.length == 0}
        No notifications
    {:else}
        {#each data.notifications as notification}
            <div class="alert md:flex justify-between">
                <span
                    >You have <b>{notification.amount}</b> rupees funds, against
                    compaign
                    <b>{notification.expand.compaign_id.title}</b></span
                >
                <form method="post" use:enhance>
                    <input type="hidden" name="id" value={notification.id} />
                    <button class="btn btn-info btn-xs">Transfer Online</button>
                </form>
            </div>
        {:else}
            loading
        {/each}
    {/if}
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
