import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import SeriesList from '../../Components/SeriesList/SeriesList';
import NavBar from '../../Components/NavBar/NavBar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Store from '../../Redux/Store';
import { fetchAirTodaySeries } from '../../Redux/Reducers/Series';

export default function AirTodaySeries() {

    const [page, setPage] = useState(2);
    const [seriesList, setSeriesList] = useState([]);
  
    const SerieGenres = useSelector((state) => state.Series.SerieGenres);
  
    useEffect(() => {
      if (SerieGenres && page > 2) {
        Store.dispatch(fetchAirTodaySeries({ page }));
      }
    }, [SerieGenres, page]);
  
    const AirTodaySeries = useSelector((state) => state.Series.AirTodaySeries);
    const loadingMore = useSelector((state) => state.Series.loadingMore);
    
    useEffect(() => {
      if (AirTodaySeries) {
        setSeriesList([...seriesList, ...AirTodaySeries.results]);
      }
    }, [AirTodaySeries]);


    return (
        <>
          <NavBar />
          {SerieGenres && (
            <>
              <div className="container mx-auto px-4 flex flex-col items-center ">
                {/* BreadCrumb */}
                <div className="w-full text-xs xs:text-base flex items-center text-gray-500 py-4 font-montserrat z-20">
                  <a href="#" className="hover:text-cyan z-20 duration-200">
                    Home
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className="scale-50 z-20 mt-1 -rotate-90"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                  <a href="#" className="hover:text-cyan z-20 duration-200">
                    Series
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    className="scale-50 z-20 mt-1 -rotate-90"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                  <a
                    href="#"
                    className="hover:text-cyan z-20 duration-200 text-white"
                  >
                    today's series
                  </a>
                </div>
    
                {/* Header */}
                <div className="w-full flex flex-col items-center mt-6">
                  <h1 className="font-montserrat text-base xs:text-lg sm:text-2xl text-gray-400">
                    Airing Today's Series
                  </h1>
                  <h4 className="text-gray-500 font-montserrat text-xs sm:text-sm">
                    Total Results : {AirTodaySeries && AirTodaySeries.total_results}
                  </h4>
                </div>
    
                {/* Series */}
                {seriesList &&
                seriesList &&
                seriesList.length > 0 ? (
                  <>
                    <SeriesList seriesList={seriesList} SerieGenres={SerieGenres} />
    
                    <button
                      className=" text-sm font-montserrat text-white px-4 py-2 bg-cyan rounded-md my-8"
                      onClick={() => setPage(page + 1)}
                      disabled={loadingMore}
                    >
                      {loadingMore ? "... Loading" : "More Movies"}
                    </button>
                  </>
                ) : (
                  <div className="h-svh">
                    <Loader />
                  </div>
                )}
              </div>
    
              <Footer />
            </>
          )}
        </>
      );
}
