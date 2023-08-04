<script>
    import Collapse from "./Collapse.svelte";
</script>

<Collapse text="Get compaign by id">
    <input
        type="text"
        required
        placeholder="*******"
        class="input input-bordered w-full"
    />
    <button class="btn btn-primary mt-5 mb-3">Fetch</button>
</Collapse>
