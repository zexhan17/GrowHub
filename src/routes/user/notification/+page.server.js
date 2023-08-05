export const load = async ({ locals }) => {
    try {
        let notifications = await locals.pb.collection('transactions').getFullList({
            filter: `status = "2" && req_online_transfer = false && compaigner_id = "${locals.user.id}"`,
            expand: 'compaign_id'
        });
        notifications = JSON.parse(JSON.stringify(notifications))
        return { notifications }
    } catch (error) {
        console.log(error)
    }
};

export const actions = {
    default: async ({ locals, request }) => {
        const formdata = await request.formData();
        try {
            await locals.pb.collection('transactions').update(formdata.get('id'), { req_online_transfer: true })
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
    }
}