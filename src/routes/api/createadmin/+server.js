import { json } from '@sveltejs/kit'

export async function POST({ request, locals }) {
    const data = await request.json();
    try {
        await locals.pb.collection('users').create(data);
        return json({
            success: true,
            msg: 'success'
        })
    } catch (error) {
        console.log(error)
        return new Response({
            error: true,
            msg: 'server error'
        })
    }
}