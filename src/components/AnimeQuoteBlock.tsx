import { useAnime } from '../api/anime/hooks';

export default function AnimeQuoteBlock() {
  const { isLoading, error, data } = useAnime();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  console.info(data);

  return (
    <>
      <span>{isLoading}</span>
    </>
  );
}
