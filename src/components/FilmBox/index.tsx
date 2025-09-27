import { environment } from '@/utils/environment';
import { TabHeader } from '../TabHeader';
import React from 'react';
import { Movie } from '@/app/page';

interface Items {
  trendMovies?: Movie[];
}

export const FilmBox: React.FC<Items> = ({ trendMovies }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="container">
        <TabHeader />
        <div
          className="flex w-full items-start gap-x-5 overflow-x-auto bg-repeat-x py-5"
          style={{
            backgroundImage: 'url("/img/trending.svg")',
            backgroundPositionY: '150px',
          }}
        >
          {trendMovies?.map((movie) => (
            <div className="flex flex-col gap-y-5 first:ml-10" key={movie.id}>
              <div
                className="min-h-[225px] min-w-40 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('${environment.imageBaseUrl}${movie?.backdrop_path}')`,
                }}
              ></div>
              {movie.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
