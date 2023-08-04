<script>
    import Copy from "./Copy.svelte";
    export let id;
    export let author;
    export let email;
</script>

<label for={"Contactmodal" + id} class="btn btn-secondary btn-sm md:btn-md"
    >Contact</label
>

<input type="checkbox" id={"Contactmodal" + id} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h1 class="my-3 bg-warning p-2 rounded-md">
            You can contact to <b>{author}</b> using this email, please use this
            for good intent only, you are accountable for any missuse
        </h1>
        <div class="border px-2 rounded">
            <Copy title={"Email"} value={email} />
        </div>
        <div class="modal-action">
            <label for={"Contactmodal" + id} class="btn">Close</label>
        </div>
    </div>
</div>
