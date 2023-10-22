export async function load({ locals }) {
    try {
        let transactions = await locals.pb.collection('transactions').getFullList();
        transactions = JSON.parse(JSON.stringify(transactions))
        return { transactions }
    } catch (error) {
        console.log(error)
    }
};

export const actions = {
    verify: async ({ locals, request }) => {
        const formData = await request.formData();
        try {
            await locals.pb.collection('transactions').update(formData.get('id'), { status: 2 });
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

    },

    success: async ({ locals, request }) => {
        let formData = await request.formData();
        formData = Object.fromEntries(formData)
        const { id, compaign_id, compaigner_id, donor_id, amount } = formData;
        try {
            await locals.pb.collection('transactions').update(id, { status: 3 });
            await locals.pb.collection('compaigns').update(compaign_id, { 'donations+': + amount });
            await locals.pb.collection('users').update(donor_id, { 'donations+': amount });
            await locals.pb.collection('users').update(compaigner_id, { 'receivings+': amount });
            await locals.pb.collection('stats').update('46pf7n5f1y3yle1', { 'donations+': amount, 'needed-': amount });

            const compaign = await locals.pb.collection('compaigns').getOne(compaign_id);
            if (compaign.need <= compaign.donations) {
                await locals.pb.collection('compaigns').update(compaign_id, { completed: true });
                await locals.pb.collection('stats').update('46pf7n5f1y3yle1', { 'compaigns+': 1, });
            }
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