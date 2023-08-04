<script>
    export let src;
    export let id;
</script>

<label for={id + "modal"} class="btn btn-sm">img</label>
<input type="checkbox" id={id + "modal"} class="modal-toggle" />
<label for={id + "modal"} class="modal cursor-pointer">
    <label class="modal-box relative" for="">
        <img {src} />
    </label>
</label>
