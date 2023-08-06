<script>
    export let avatar;
    export let id;
</script>

<label for={"my_modal_7" + id} class="btn btn-xs">IMG</label>

<input type="checkbox" id={"my_modal_7" + id} class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <img
            src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${id}/${avatar}`}
            alt="clg card"
        />
    </div>
    <label class="modal-backdrop" for={"my_modal_7" + id}>Close</label>
</div>
