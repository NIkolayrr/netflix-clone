export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  Plot?: string
  Genre?: string
  Director?: string
  Actors?: string
  Runtime?: string
  imdbRating?: string
}

export interface Rating {
  Source: string
  Value: string
}

export interface FullMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: 'True' | 'False'
  Ratings: Rating[]
}
