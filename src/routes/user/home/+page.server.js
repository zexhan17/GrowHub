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