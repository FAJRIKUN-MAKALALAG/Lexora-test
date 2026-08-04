import React, { useState, useEffect, useRef } from 'react';
import arrowImg from '../assets/herosection/arrow.png';
import paper2Img from '../assets/paper2.png';
import { ChevronLeft, ChevronRight, RefreshCw, AlertCircle } from 'lucide-react';

interface Article {
  id: string;
  webTitle: string;
  webPublicationDate: string;
  webUrl: string;
  sectionName?: string;
  fields?: {
    thumbnail?: string;
    trailText?: string;
  };
}

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
];

const MediaPress: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle responsive items count (1 on mobile <550px, 2 on tablet 550px-1023px, 3 on desktop >=1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 550) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_GUARDIAN_API_KEY || '-';
      const endpoint = `https://content.guardianapis.com/search?q=law%20OR%20legal%20OR%20justice%20OR%20court&show-fields=thumbnail,trailText&page-size=12&api-key=${apiKey}`;

      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`Failed to load news articles (Status: ${res.status})`);
      }
      const data = await res.json();
      const results: Article[] = data.response?.results || [];

      if (results.length === 0) {
        throw new Error('No articles found matching the criteria.');
      }
      setArticles(results);
    } catch (err: any) {
      setError(err.message || 'Unable to connect to The Guardian API. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const maxIndex = Math.max(0, articles.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Format date helper: DD MMM YYYY (e.g. 24 May 2025)
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Helper to strip HTML tags and unescape text
  const cleanText = (html?: string) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <section className="relative w-full bg-[#EBECEE] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Background paper texture top right */}
      <img
        src={paper2Img}
        alt="Paper texture background"
        className="absolute top-0 right-0 w-2/3 sm:w-1/2 md:w-5/12 max-w-[550px] h-full pointer-events-none opacity-30 object-contain object-right-top z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#8B1A1A] font-semibold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#8B1A1A] pb-0.5 inline-block">
            MEDIA & PRESS
          </span>
        </div>

        {/* Carousel Content */}
        {loading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="animate-pulse bg-white/40 p-4 rounded-sm flex flex-col space-y-4">
                <div className="bg-gray-300/70 h-48 sm:h-56 w-full rounded-sm"></div>
                <div className="h-6 bg-gray-300/70 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300/70 rounded w-1/2"></div>
                <div className="h-10 bg-gray-300/60 rounded w-full"></div>
                <div className="h-4 bg-gray-300/70 rounded w-1/3 mt-2"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div className="max-w-md mx-auto my-8 p-6 bg-white border border-red-200 rounded-sm text-center shadow-sm">
            <AlertCircle className="w-10 h-10 text-[#8B1A1A] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-900 mb-1 font-sans">Unable to Load News</h4>
            <p className="text-sm text-gray-600 mb-5 font-sans">{error}</p>
            <button
              onClick={fetchArticles}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B1A1A] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#6e1414] transition-colors rounded-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        ) : (
          /* Articles Carousel Slider */
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {articles.map((article, index) => {
                  const thumbnail =
                    article.fields?.thumbnail ||
                    FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                  const formattedDate = formatDate(article.webPublicationDate);
                  const excerpt = cleanText(article.fields?.trailText || article.webTitle);
                  const category = article.sectionName || 'Media';

                  return (
                    <div
                      key={article.id || index}
                      className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 md:px-4 flex"
                    >
                      <div className="flex flex-col h-full w-full group">
                        {/* Thumbnail */}
                        <div className="overflow-hidden w-full h-48 sm:h-56 md:h-60 lg:h-64 bg-gray-200 shadow-sm rounded-xs">
                          <img
                            src={thumbnail}
                            alt={article.webTitle}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-normal font-oswald text-[#1F1F1F] uppercase leading-[1.2] line-clamp-2 mt-4 mb-2 group-hover:text-[#9E8043] transition-colors">
                          {article.webTitle}
                        </h3>

                        {/* Category | Date */}
                        <p className="text-xs font-sans font-semibold text-[#555555] mb-2">
                          {category} | {formattedDate}
                        </p>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 sm:line-clamp-3 font-sans leading-relaxed mb-4 flex-1">
                          {excerpt}
                        </p>

                        {/* Read More Link */}
                        <div className="mt-auto">
                          <a
                            href={article.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#9E8043] font-semibold text-xs sm:text-sm tracking-widest uppercase hover:underline group/link focus:outline-none"
                          >
                            <span>MORE DETAIL</span>
                            <img
                              src={arrowImg}
                              alt="Arrow"
                              className="h-3 w-auto object-contain transform group-hover/link:translate-x-1 transition-transform filter brightness-0 sepia-[0.8] hue-rotate-[10deg] saturate-[300%]"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            {articles.length > itemsPerPage && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  aria-label="Previous slide"
                  className={`p-3 rounded-full border transition-all ${
                    currentIndex === 0
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                      : 'border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono font-semibold text-gray-500 tracking-wider">
                  {currentIndex + 1} / {maxIndex + 1}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next slide"
                  className={`p-3 rounded-full border transition-all ${
                    currentIndex >= maxIndex
                      ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                      : 'border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaPress;
