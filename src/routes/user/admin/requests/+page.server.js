import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    try {
        let users = await locals.pb.collection('users').getFullList({ filter: 'active = false' });
        users = JSON.parse(JSON.stringify(users))
        return {
            users,
        }
    } catch (error) {
        return fail(400, {
            error: true,
            msg: "server error can't fetch"
        })
    }
}


export const actions = {
    accept: async ({ locals, request }) => {
        const formData = await request.formData();
        const id = formData.get('id')
        try {
            await locals.pb.collection('users').update(id, { 'active': true });
            return {
                success: true,
                msg: 'success'
            }
        } catch (error) {
            console.log(error)
            return {
                error: true,
                msg: 'server error'
            }
        }
    },
    reject: async ({ locals, request }) => {
        const formData = await request.formData();
        const id = formData.get('id')
        try {
            await locals.pb.collection('users').delete(id);
            return {
                success: true,
                msg: 'success'
            }
        } catch (error) {
            return {
                error: true,
                msg: 'server error'
            }
        }
    }
}