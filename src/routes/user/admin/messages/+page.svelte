<script>
    import Message from "$lib/Message.svelte";

    export let data;
    export let form;
</script>

{#each data.msgs as msg}
    <Message {msg} {form} />
{:else}
    <div class="text-center font-bold text-2xl">no messsages</div>
{/each}
