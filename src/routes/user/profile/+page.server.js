export async function load({ locals }) {

    let compaigns = await locals.pb.collection('compaigns').getFullList({
        filter: `author="${locals.user.id}"`,
        expand: 'author',
    });
    compaigns = JSON.parse(JSON.stringify(compaigns))
    return {
        compaigns,
    };
};