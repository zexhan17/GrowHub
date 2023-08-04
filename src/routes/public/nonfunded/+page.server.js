export async function load({ locals }) {
    try {
        let list = await locals.pb.collection('compaigns').getFullList({
            sort: '-created',
            expand: 'author',
            filter: 'funded = false',
        });
        list = JSON.parse(JSON.stringify(list))
        return {
            list,
        };
    } catch (error) {
        return {
            error: true,
            msg: 'server error'
        }
    }
};