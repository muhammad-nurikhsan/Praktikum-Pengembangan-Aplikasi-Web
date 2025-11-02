import { useMemo } from 'react';

function useBookStats(books) {
  const stats = useMemo(() => {
    const total = books.length;
    const milik = books.filter(b => b.status === 'milik').length;
    const baca = books.filter(b => b.status === 'baca').length;
    const beli = books.filter(b => b.status === 'beli').length;
    const completionRate = total > 0 ? ((milik + baca) / total) * 100 : 0;
    
    return { total, milik, baca, beli, completionRate };
  }, [books]);

  return stats;
}

export default useBookStats;