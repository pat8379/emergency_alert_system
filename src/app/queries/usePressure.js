import { useQuery } from 'react-query';

const fetchPublicPortfolioBreakdown = async () => {
    const url = process.env.NEXT_PUBLIC_FETCH_PRESSURE
    const res = await fetch(url);

    if (!res.ok) throw await res.json();

    try {
        const data =  await res.json();
        if (data && data.feeds) {
            return data.feeds[0].field1
        }
        return null
    } catch {
        return {};
    }
}

export default ( opts = {}) =>
  useQuery(
    ['usePublicPortfolioBreakdown'],
    async (_key) => {
      return await fetchPublicPortfolioBreakdown();
    },
    {
      ...opts,
    },
  );
