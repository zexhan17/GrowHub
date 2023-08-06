export async function load({ locals }) {
    try {
        let stats = await locals.pb.collection('stats').getOne('shdnsyf9wo6zy56');
        stats = JSON.parse(JSON.stringify(stats))
        return {
            stats,
        };
    } catch (error) {
        console.log(error)
    }
};

export const actions = {
    updateStats: async ({ locals, request }) => {
        const data = await request.formData();
        try {
            await locals.pb.collection('stats').update('shdnsyf9wo6zy56', data)
            return {
                success: true,
                msg: 'success',
            }
        } catch (error) {
            return {
                error: true,
                msg: 'server error'
            }
        }
    }
}