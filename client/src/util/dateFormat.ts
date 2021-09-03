import { format } from 'date-fns'

export const formatDate = (date: string) => {
    return format(new Date(Date.parse(date)), "PP")
}