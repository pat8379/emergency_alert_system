import { useQuery } from 'react-query';

const fetchPublicPortfolioBreakdown = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_UPDATE_EPAPER);

    if (!res.ok) throw await res.json();

    try {
        return await res.json();
        return null
    } catch {
        return {};
    }
}

export default ( opts = {}) =>
  useQuery(
    ['useEDisplay'],
    async (_key) => {
      return await fetchPublicPortfolioBreakdown();
    },
    {
      ...opts,
    },
  );
