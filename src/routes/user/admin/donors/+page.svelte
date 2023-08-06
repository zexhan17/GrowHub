<script>
    export let data;

    let search;
    let list = data.donors;

    $: if (search) {
        list = data.donors.filter(
            (f) =>
                f.username.includes(search) ||
                f.email.includes(search) ||
                f.id.includes(search)
        );
    } else {
        list = data.donors;
    }
</script>

<input
    type="text"
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
                <th>Donations</th>
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
                        <td>{d.donations}</td>
                        <td class="sm:hidden">{i + 1}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>
