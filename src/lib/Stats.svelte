<script>
    export let stats;
    console.log(stats);
</script>

<div class="stat">
    <div class="stat-title">Donated</div>
    <div class="stat-value">{stats.donations}</div>
</div>

<div class="stat">
    <div class="stat-title">Compaigns Completed</div>
    <div class="stat-value">{stats.compaigns}</div>
</div>

<div class="stat">
    <div class="stat-title">Need</div>
    <div class="stat-value">{stats.needed}</div>
</div>
