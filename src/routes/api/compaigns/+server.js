import { json } from '@sveltejs/kit'

export async function GET({ url, locals }) {
    const id = url.searchParams.get('id');
    try {
        const compaigns = await locals.pb.collection('compaigns').getFullList({
            filter: `author="${id}"`,
            expand: 'author',
        });
        return json({
            compaigns,
        })
    } catch (error) {
        console.log(error)
        return new Response({
            error: true,
            msg: 'server error'
        })
    }
}