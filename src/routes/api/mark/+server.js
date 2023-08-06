import { json } from '@sveltejs/kit'

export async function GET({ url, locals }) {
    const id = url.searchParams.get('id');
    try {
        await locals.pb.collection('compaigns').update(id, { 'completed': true })
        return json({
            success: true,
            msg: "success"
        })
    } catch (error) {
        console.log(error)
        return new Response({
            error: true,
            msg: 'server error'
        })
    }
}