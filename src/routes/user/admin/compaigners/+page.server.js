import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    try {
        let users = await locals.pb.collection('users').getFullList({ filter: 'role = "compaigner" && active = true' });
        users = JSON.parse(JSON.stringify(users))

        return {
            success: true,
            users,
        }
    } catch (error) {
        return fail(400, {
            error: true,
            msg: "server error can't fetch"
        })
    }

}
