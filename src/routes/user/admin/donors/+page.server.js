import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    try {
        let donors = await locals.pb.collection('users').getFullList({ filter: 'role = "donor" && active = true' });
        donors = JSON.parse(JSON.stringify(donors))

        return {
            success: true,
            donors,
        }
    } catch (error) {
        return fail(400, {
            error: true,
            msg: "server error can't fetch"
        })
    }

}
