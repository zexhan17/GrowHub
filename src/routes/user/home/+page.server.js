export async function load({ locals }) {
    try {
        let stats = await locals.pb.collection('stats').getOne('46pf7n5f1y3yle1');
        stats = JSON.parse(JSON.stringify(stats))
        return {
            stats,
        };
    } catch (error) {
        console.log(error)
    }
};