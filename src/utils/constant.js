export const NETFLIX_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_ICON = "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzk4ZTE1NjcyOWVhM2YwMDYxMmRmZmZiNjJmOTdlYSIsIm5iZiI6MTc2OTM1OTE3MS4wNDQsInN1YiI6IjY5NzY0NzQzMjBjYTQ5ZjZiOGFlMzcwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byW2b5F-WtMMIh7SKar7KsZkaXt4JOhsXni0NbrUd-E'
  }
};

export const GETNOWPLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const GETMOVIEVIDEO_API = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos`;
export const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w400/`;
export const GETPOPULAR_API = "https://api.themoviedb.org/3/movie/popular?page=1";
export const GETUPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming?page=1";