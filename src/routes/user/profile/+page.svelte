<script>
    import { page } from "$app/stores";
    import Compaign from "$lib/Compaign.svelte";

    const user = $page.data.user;
    export let data;
    console.log(data.compaigns);
</script>

<div class="grid place-content-center mt-5 mb-10">
    <div class="w-72 sm:w-96 md:w-[30rem] mx-auto">
        {#if user.role == "compaigner"}
            <img
                class="w-[30rem] h-[12rem] mb-5 rounded-lg"
                src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
                alt="clg card"
            />
        {/if}
        <div
            class="bg-base-300 flex justify-between items-center py-2 px-3 rounded-t-lg"
        >
            <span>name</span>
            <span>{user.name}</span>
        </div>
        <div class="bg-base-200 flex justify-between items-center py-2 px-3">
            <span>username</span>
            <span>{user.username}</span>
        </div>
        <div class="bg-base-300 flex justify-between items-center py-2 px-3">
            <span>email</span>
            <span>{user.email}</span>
        </div>

        {#if user.role == "compaigner"}
            <div
                class="bg-base-200 flex justify-between items-center py-2 px-3"
            >
                <span>Your Receivings</span>
                <span>{$page.data.user.receivings}</span>
            </div>
            <div
                class="bg-base-300 flex justify-between items-center py-2 px-3"
            >
                <span>Your compaigns</span>
                <span>{$page.data.user.compaigns}</span>
            </div>
            <div
                class="bg-base-200 flex justify-between items-center py-2 px-3"
            >
                <span>College roll no</span>
                <span>{$page.data.user.clg_roll_no}</span>
            </div>
            <div
                class="bg-base-300 flex justify-between items-center py-2 px-3"
            >
                <span>Gc roll no</span>
                <span>{$page.data.user.gc_roll_no}</span>
            </div>
            <div
                class="bg-base-200 flex justify-between items-center py-2 px-3"
            >
                <span>Reg no</span>
                <span>{$page.data.user.reg_no}</span>
            </div>
        {/if}

        {#if user.role == "donor"}
            <div
                class="bg-base-200 flex justify-between items-center py-2 px-3"
            >
                <span>Donations</span>
                <span>{$page.data.user.donations}</span>
            </div>
        {/if}
        <div
            class="bg-base-300 flex justify-between items-center py-2 px-3 rounded-b-lg"
        >
            <span>Id</span>
            <span>{$page.data.user.id}</span>
        </div>
    </div>
    {#if user.role == "compaigner" && user.compaigns > 0}
        <div class="mt-10">
            <div
                class="text-2xl font-bold justify-between items-center flex px-2"
            >
                <h1 class="">YOUR COMPAIGNS</h1>
                <h1 class=" pr-1">Total: {user.compaigns}</h1>
            </div>
            {#if data.compaigns}
                {#each data.compaigns as compaign}
                    <Compaign {compaign} owner={true} />
                {/each}
            {/if}
        </div>
    {/if}
</div>
