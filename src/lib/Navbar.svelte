<script>
    import { page } from "$app/stores";
    import Items from "./Items.svelte";
    import Logout from "./Logout.svelte";
    import Theme from "./Theme.svelte";
    $: pathname = $page.url.pathname;
</script>

<div class="navbar shadow-lg bg-base-100 fixed top-0 z-10">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </label>
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {#if $page.data.auth}
                    <Items />
                {:else}
                    <li>
                        <a
                            class:bg-primary={pathname == "/public/funded"}
                            href="/public/funded"
                            class="capitalize">Funded Compaigns</a
                        >
                    </li>
                    <li>
                        <a
                            class:bg-primary={pathname == "/public/nonfunded"}
                            href="/public/nonfunded"
                            class="capitalize">Non Funded Compaigns</a
                        >
                    </li>
                {/if}
            </ul>
        </div>
        <div class="flex items-center cursor-pointer">
            <!-- <img src="logo.svg" alt="logo" className="h-12 w-12 " /> -->
            <a to="/user/home" class="btn btn-ghost text-2xl hover:text-white">
                <span class="text-green-500 contents">GROW</span>HUB
            </a>
        </div>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#if $page.data.auth}
                <Items />
            {:else}
                <li>
                    <a
                        class:bg-primary={pathname == "/public/funded"}
                        href="/public/funded"
                        class="capitalize">Funded Compaigns</a
                    >
                </li>
                <li>
                    <a
                        class:bg-primary={pathname == "/public/nonfunded"}
                        href="/public/nonfunded"
                        class="capitalize">Non Funded Compaigns</a
                    >
                </li>
            {/if}
        </ul>
    </div>
    <div class="navbar-end">
        <Theme />
        {#if $page.data.auth}
            <Logout />
        {:else}
            <a href="/auth/login" class="btn">sign in</a>
        {/if}
    </div>
</div>
