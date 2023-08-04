<script>
    export let text;
    let show = false;
</script>

<div
    class="border border-base-300 bg-base-100 rounded-box w-80 md:w-[35rem] lg:w-[40rem]"
>
    <div
        class="collapse-title text-xl items-center font-medium flex justify-between pr-3 cursor-pointer"
        on:click={() => (show = !show)}
    >
        <span>{text}</span>
        {#if show}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                />
            </svg>
        {/if}
        {#if !show}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                />
            </svg>
        {/if}
    </div>
    {#if show}
        <div class="p-4 space-y-3">
            <slot />
        </div>
    {/if}
</div>
