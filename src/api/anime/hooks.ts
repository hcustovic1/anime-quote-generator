import { useQuery } from 'react-query';
import { get } from './actions';

export const useAnime = () => useQuery('getRandomAnimeQuoteRequest', get);
