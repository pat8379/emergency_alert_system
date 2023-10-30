import { useQuery } from 'react-query';

const fetchPublicPortfolioBreakdown = async (dir) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPDATE_EPAPER}field2=${dir}`);

    if (!res.ok) throw await res.json();

    try {
        return await res.json();
        return null
    } catch {
        return {};
    }
}

export default (params, opts = {}) =>
  useQuery(
    ['useEDisplay', params],
    async (key) => {
      return await fetchPublicPortfolioBreakdown(params);
    },
    {
      ...opts,
    },
  );
