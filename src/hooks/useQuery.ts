import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export function GetSearchBook(keyword: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['searchBook', keyword],
    queryFn: async () => {
      if (!keyword.trim()) return null
      const response = await axios.get('/api/getSearchBook', { params: { query: keyword } })
      return response.data
    },
    enabled: Boolean(keyword.trim()),
    staleTime: 1000 * 300,
  })

  return { data, isLoading, error }
}
