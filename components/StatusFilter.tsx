import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { string } from 'zod'
import { Select ,SelectGroup,SelectContent,SelectItem,SelectTrigger
    ,SelectValue
} from './ui/select'

const statuses: { label: string, value?: string }[] = [
    { label: "Open / Started" },
    { label: "Open", value: "OPEN" },
    { label: "Started", value: "STARTED" },
    { label: "Close", value: "CLOSED" },

]

const StatusFilter = () => {
    const router = useRouter()
    const searchParams = useSearchParams();

    <Select defaultValue={searchParams.get("status") || ""}>
        
     </Select>

    return
    (
        <div>StatusFilter</div>
    )
}



export default StatusFilter