import React from 'react'
import {
    Table
    , TableBody
    , TableCell
    , TableHeader
    , TableHead
    , TableRow

} from '@/components/ui/table'
import { User } from '@prisma/client'
import Link from 'next/link'

interface Props {
    users: User[]
}

const DataTableSimple = ({ users }: Props) => {
    return (
        <div className='w-full mt-5'>
            <div className='rounded-md sm:border'>
                <Table>
                    <TableHeader>
                        <TableRow className='bg-secondbody hover:bg-secondary'>
                            <TableHead className='font-medium'>Name</TableHead>
                            <TableHead className='font-medium'>Username</TableHead>
                            <TableHead className='font-medium'>Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users ? users.map((user) => (
                            <TableRow key={user.id} data-href="/">
                                <TableCell>
                                    <Link href={`/users/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/users/${user.id}`}>
                                        {user.username}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {user.role}
                                </TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default DataTableSimple