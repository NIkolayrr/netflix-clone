import { useCallback, useEffect, useState } from 'react'
import { useSearchMoviesQuery } from '../store/api'
import { selectMoviesByIds } from '../store/selectors'
import { useAppSelector } from './useTypedSelector'

export function usePaginatedMovies(query: string, enabled = true, pageSize = 10) {
  const [page, setPage] = useState(1)
  const [ids, setIds] = useState<string[]>([])

  const { data, isLoading, isFetching, error } = useSearchMoviesQuery(
    { query, page },
    {
      skip: !enabled || query.trim() === '',
      refetchOnMountOrArgChange: false,
    }
  )

  useEffect(() => {
    if (!data?.entities) return

    setIds((prev) => {
      const newIds = data.entities.map((m) => m.imdbID)
      if (page === 1) return newIds
      const seen = new Set(prev)
      return [...prev, ...newIds.filter((id) => !seen.has(id))]
    })
  }, [data?.entities, page])

  useEffect(() => {
    setPage(1)
    setIds([])
  }, [query])

  const movies = useAppSelector(selectMoviesByIds(ids))

  const totalPages = data ? Math.ceil(data.totalResults / pageSize) : 0

  const loadMore = useCallback(() => {
    if (!isFetching && page < totalPages) {
      setPage((p) => p + 1)
    }
  }, [isFetching, page, totalPages])

  return {
    movies,
    isLoading,
    isFetching,
    error,
    loadMore,
    currentPage: page,
    totalPages,
  }
}
