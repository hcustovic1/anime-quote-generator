import { useAnime } from '../api/anime/hooks';

export default function AnimeQuoteBlock() {
  const { data, status } = useAnime();

  console.info(data);

  return (
    <>
      <span>{status}</span>
    </>
  );
}
