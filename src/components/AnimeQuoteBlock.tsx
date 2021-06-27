import { useAnime } from '../api/anime/hooks';

export default function AnimeQuoteBlock() {
  const { isLoading, error, data } = useAnime();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <blockquote>
      <p>{data?.anime}</p>
      <p>{data?.character}</p>
      <p>{data?.quote}</p>
    </blockquote>
  );
}
