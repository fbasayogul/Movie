'use client';

import { Button } from '@/components/Button';
import { FilmBox } from '@/components/FilmBox';
import { Input } from '@/components/Input';
import { Wrapper } from '@/components/Wrapper';
import { getPopularMovies } from '@/services/PopularMovies';
import { getTrending } from '@/services/Trending';
import { useTrendStore } from '@/store';
import { useEffect, useState } from 'react';

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trend, setTrend] = useState<Movie[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { activeTrend } = useTrendStore();

  useEffect(() => {
    getPopularMovies().then((res: any) => {
      setMovies(res.data.results);
    });
  }, []);

  useEffect(() => {
    getTrending('all', activeTrend).then((res: any) => {
      setTrend(res.data.results);
    });
  }, [activeTrend]);

  return (
    <div>
      <Wrapper backgroundImage="multi-face">
        <div className="container py-20">
          <h2 className="text-4xl font-bold text-white">Hoş Geldiniz!</h2>
          <h3 className="text-2xl font-semibold text-white">
            Keşfedilecek milyonlarca film, TV şovu ve kişi. Şimdi keşfedin.
          </h3>
          <div className="relative mt-10 w-full">
            <Input
              type="text"
              placeholder="Film, dizi veya kişi ara..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full"
            />
            <Button
              value="Ara"
              className="absolute top-1/2 right-0 h-full -translate-y-1/2 cursor-pointer rounded-3xl bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] px-5 transition-all duration-300 ease-in-out hover:text-[#032541]"
            />
          </div>
        </div>
      </Wrapper>

      <FilmBox trendMovies={trend} />
    </div>
  );
}
