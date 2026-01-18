import React, { useEffect, useRef, useState } from "react";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { fetchWPBlogs, WPBlogPost } from "@/utils/api";
import { getFullUrl, getAssetPath } from "@/utils/helper";

const Blogs = () => {
  const [blogs, setBlogs] = useState<WPBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const BLOGS_PER_PAGE = 12;

  // Create refs for each section
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWPBlogs(currentPage, BLOGS_PER_PAGE);

        if (data.success && data.blogs && data.blogs.length > 0) {
          // Ensure only 12 blogs per page
          const limitedBlogs = data.blogs.slice(0, BLOGS_PER_PAGE);
          setBlogs(limitedBlogs);
          setTotalPages(data.total_pages);
          setTotalPosts(data.total_posts);
        } else if (data.blogs && data.blogs.length === 0) {
          setError('No blog posts available');
        } else {
          setError('Failed to load blog posts');
        }
      } catch (err) {
        console.error('Error loading blogs:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [currentPage]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-section');
          if (elementId) {
            setVisibleElements(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [bannerRef, contentRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Truncate excerpt to 2 lines (approximately 100 characters)
  const truncateExcerpt = (text: string, maxLength: number = 100) => {
    const strippedText = text.replace(/<[^>]+>/g, '');
    if (strippedText.length <= maxLength) return strippedText;
    return strippedText.substring(0, maxLength).trim() + '...';
  };

  return (
    <>
      <Head>
        <title>Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta property="og:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/blogs')} />
        <meta property="og:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Read informative articles about plastic surgery, aesthetic treatments, and beauty tips from Dr. Soma Clinical Aesthetics in Malaysia." />
        <meta name="twitter:image" content={getFullUrl('/images/blog_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/blogs')} />
      </Head>
      <section className="flex bg-no-repeat bg-cover py-100 lg:py-[175px]" style={{ backgroundImage: `url(${getAssetPath('/images/blog_page_banner_image.png')})` }} ref={bannerRef}>
        <div className="flex containers w-full">
          <div className={`flex w-full flex-col gap-[10px] max-w-[406px] transition-all duration-700 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-white max-[768px]:!text-[54px] max-[512px]:!text-[42px]">
              Blog
            </h1>
            <h5 className="text-white">
              Informative articles about plastic surgery and aesthetic treatments
            </h5>
          </div>
        </div>
      </section>

      <section className="py-50 lg:py-100" ref={contentRef}>
        <div className="flex containers w-full">
          <div className={`w-full transition-all duration-700 ${
            isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {loading && (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="text-para-black mt-4">Loading blog posts...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-20">
                <p className="text-red-500">{error}</p>
                <p className="text-para-black mt-2">Please try again later.</p>
              </div>
            )}

            {!loading && !error && blogs.length > 0 && (
              <>
                {/* Total Posts Info */}
                <div className="mb-8 text-para-black">
                  <p>Showing {((currentPage - 1) * BLOGS_PER_PAGE) + 1} - {Math.min(currentPage * BLOGS_PER_PAGE, totalPosts)} of {totalPosts} articles</p>
                </div>

                {/* Blog Grid - 4 columns on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {blogs.map((blog, index) => (
                    <Link
                      key={blog.id}
                      href={`/blogs/${blog.id}`}
                      className={`group bg-white rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/20 ${
                        isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        animationDelay: `${(index + 1) * 0.05}s`,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(234, 98, 47, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                      }}
                    >
                      {/* Featured Image */}
                      <div className="relative overflow-hidden h-52">
                        <BaseImage
                          src={blog.featured_image?.medium || blog.featured_image?.large || blog.featured_image?.full || "/images/blog_image.png"}
                          alt={blog.title}
                          width={400}
                          height={220}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/blog_image.png";
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Category Badge */}
                        {blog.categories && blog.categories[0] && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-sm">
                              {blog.categories[0].name}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Date & Read Time */}
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{blog.date_formatted}</span>
                          </div>
                          {blog.read_time && (
                            <div className="flex items-center">
                              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{blog.read_time}</span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                          {blog.title}
                        </h3>

                        {/* Excerpt - 2 lines */}
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-5">
                          {truncateExcerpt(blog.excerpt, 90)}
                        </p>

                        {/* Read More Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
                            Read Article
                          </span>
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                            <svg className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col items-center mt-16">
                    {/* Page Info - Above */}
                    <p className="text-gray-500 text-sm mb-6">
                      Page <span className="font-semibold text-gray-800">{currentPage}</span> of <span className="font-semibold text-gray-800">{totalPages}</span>
                    </p>

                    <div className="flex items-center gap-4">
                      {/* Previous Button - Icon Only */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentPage === 1
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary shadow-sm hover:shadow-lg hover:shadow-primary/20'
                        }`}
                      >
                        <svg className="w-7 h-7 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-2">
                        {getPaginationNumbers().map((page, index) => (
                          <React.Fragment key={index}>
                            {page === '...' ? (
                              <span className="px-2 text-gray-400 text-lg">•••</span>
                            ) : (
                              <button
                                onClick={() => handlePageChange(page as number)}
                                className={`w-12 h-12 rounded-full font-semibold text-base transition-all duration-300 ${
                                  currentPage === page
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200 hover:border-primary/40'
                                }`}
                              >
                                {page}
                              </button>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Next Button - Icon Only */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentPage === totalPages
                            ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/30'
                        }`}
                      >
                        <svg className="w-7 h-7 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {!loading && !error && blogs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-para-black">No blog posts available at the moment.</p>
                <p className="text-para-black mt-2">Check back soon for informative articles!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
