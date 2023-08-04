export const POST = async ({ locals, request }) => {
    const data = await request.formData();
    console.log(data)
    data.append('role', "admin");
    try {
        await locals.pb.collection('users').create(formData);
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