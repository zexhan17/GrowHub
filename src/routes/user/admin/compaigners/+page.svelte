<script>
    export let data;

    let search;
    let list = data.users;

    $: if (search) {
        list = data.users.filter(
            (f) =>
                f.username.includes(search) ||
                f.email.includes(search) ||
                f.id.includes(search)
        );
    } else {
        list = data.users;
    }
</script>

<input
    type="search"
    bind:value={search}
    placeholder="Search by name, username and email here"
    class="input input-bordered w-full mt-5 max-w-sm"
/>

<div class="overflow-x-auto mt-5">
    <table class="table">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Compaigns</th>
                <th>Receivings</th>
                <th>College Roll No</th>
                <th>GC Roll No</th>
                <th>Reg No</th>
            </tr>
        </thead>
        <tbody>
            {#if list}
                {#each list as d, i}
                    <tr class="hover">
                        <td>{i + 1}</td>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>{d.compaigns}</td>
                        <td>{d.receivings}</td>
                        <td>{d.clg_roll_no}</td>
                        <td>{d.gc_roll_no}</td>
                        <td>{d.reg_no}</td>
                        <td class="sm:hidden">{i + 1}</td>
                    </tr>
                {:else}
                    <tr class="font-bold text-xl text-center">
                        <td colspan="100%"> No Record </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>
