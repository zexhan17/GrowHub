<script>
    import Stats from "$lib/Stats.svelte";
    export let data;
</script>

<div class="grid place-items-center md:mt-20">
    <div class="md:flex max-w-[50rem] items-center mx-5 gap-5">
        <div
            class="stats stats-vertical shadow w-full mb-5 bg-base-200 md:mb-0"
        >
            <Stats stats={data.stats} />
        </div>
        <div>
            <h1 class="text-4xl md:5xl font-bold">About Us</h1>
            <p class="py-6">
                GROW HUB will help bridge this gap by providing a way for people
                to seek support from a larger pool of potential donors. Users
                should be able to create a campaign and describe the purpose of
                the campaign and the intended use of the funds. It should be
                able to process payments securely and efficiently.
            </p>

            <!-- Open the modal using ID.showModal() method -->
            <button class="btn btn-primary" onclick="my_modal_2.showModal()"
                >Donate us</button
            >
            <dialog id="my_modal_2" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">We are thankfull to you!</h3>
                    <p class="py-4">
                        This money is instantly available to any compaigner if
                        there is no donor available on the spot for helping
                    </p>
                    <span>Our Account No</span>
                    <div
                        class="flex items-center justify-between bg-primary-content px-2 rounded text-white"
                    >
                        <span>GrowHub</span>
                        <span>000-000-000-000</span>
                    </div>
                </form>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    </div>
</div>
