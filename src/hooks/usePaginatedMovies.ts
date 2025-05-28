import { useCallback, useEffect, useState } from 'react'
import { useSearchMoviesQuery } from '../store/api'
import type { Movie } from '../types/Movie'

export function usePaginatedMovies(query: string, enabled = true, pageSize = 10) {
  const [page, setPage] = useState(1)
  const [allMovies, setAllMovies] = useState<Movie[]>([])

  const { data, isLoading, isFetching, error } = useSearchMoviesQuery(
    { query, page },
    {
      skip: !enabled || query.trim() === '',
      refetchOnMountOrArgChange: false,
    }
  )

  useEffect(() => {
    if (!data?.Search) return
    setAllMovies((prev) => (page === 1 ? data.Search : [...prev, ...data.Search]))
  }, [data, page])

  useEffect(() => {
    setPage(1)
    setAllMovies([])
  }, [query])

  const totalPages = data ? Math.ceil(Number(data.totalResults) / pageSize) : 0

  const loadMore = useCallback(() => {
    if (!isFetching && page < totalPages) {
      setPage((p) => p + 1)
    }
  }, [isFetching, page, totalPages])

  return {
    movies: allMovies,
    isLoading,
    isFetching,
    error,
    loadMore,
    currentPage: page,
    totalPages,
  }
}
