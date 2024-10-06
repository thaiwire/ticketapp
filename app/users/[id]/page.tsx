import UserForm from '@/components/UserForm';
import prisma from '@/prisma/db'
import React from 'react'

interface Props {
    params: { id: string }
}

const EditUser = async ({ params }: Props) => {

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(params.id)
        },
       
    });

    if (!user) {
        return <p className="text-destructive"><div>User not found</div></p>
    }
    
    console.log(user);
    user.password = "";

    return <UserForm user={user} />
}

export default EditUser