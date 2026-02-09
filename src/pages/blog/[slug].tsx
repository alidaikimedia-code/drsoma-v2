import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchWPBlogBySlug, fetchWPBlogs, WPBlogPost } from "@/utils/api";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl, getAssetPath } from "@/utils/helper";

interface BlogDetailProps {
  blog: WPBlogPost | null;
  error?: string;
}

const BlogDetail = ({ blog, error }: BlogDetailProps) => {
  // Error state
  if (error || !blog) {
    return (
      <>
        <Head>
          <title>Blog Not Found - Dr. Soma Clinical Aesthetics</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="flex flex-col w-full min-h-screen bg-[#F9F9F9]">
          <div className="flex-1 flex items-center justify-center py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#EA622F] mb-4">
                Blog Not Found
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                {error || "The blog you're looking for doesn't exist."}
              </p>
              <Link
                href="/blog"
                className="bg-[#EA622F] text-white px-6 py-3 rounded-lg hover:bg-[#d55a2a] transition-colors inline-block"
              >
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Get page title
  const pageTitle = blog.title + " - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia";

  // Get excerpt for meta description
  const metaDescription = blog.excerpt
    ? blog.excerpt.replace(/<[^>]+>/g, '').substring(0, 160)
    : blog.content.replace(/<[^>]+>/g, '').substring(0, 160);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${blog.title} - Dr. Soma Clinical Aesthetics`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={getFullUrl(`/blog/${blog.slug}`)} />
        <meta property="og:image" content={blog.featured_image?.large || blog.featured_image?.full || ''} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} - Dr. Soma Clinical Aesthetics`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog.featured_image?.large || blog.featured_image?.full || ''} />
        <link rel="canonical" href={getFullUrl(`/blog/${blog.slug}`)} />
      </Head>

      {/* Banner Section */}
      <section className="flex bg-no-repeat bg-cover py-100 lg:py-[150px]" style={{ backgroundImage: `url(${getAssetPath('/images/blog_page_banner_image.png')})` }} id="banner">
        <div className="flex containers w-full">
          <div className="flex w-full flex-col gap-[10px] max-w-[900px]">
            <h1 className="text-white max-[768px]:!text-[36px] max-[512px]:!text-[28px] !text-[42px] leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="lg:pb-100 pb-50 pt-30 relative z-10" id="content">
        <div className="flex w-full containers">
          <div className="flex flex-col gap-30 w-full max-w-4xl mx-auto">
            {/* Blog Meta Info */}
            <div className="text-center mb-4">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                {/* Date */}
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{blog.date_formatted}</span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Dr Kamini</span>
                </div>

                {/* Read Time */}
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{blog.read_time}</span>
                </div>
              </div>

              {/* Categories - Filter out "Blog" category */}
              {blog.categories && blog.categories.filter(cat => cat.name !== 'Blog').length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                  {blog.categories.filter(cat => cat.name !== 'Blog').map((category) => (
                    <span
                      key={category.id}
                      className="px-3 py-1 bg-[#FFF5E6] text-[#EA622F] text-sm rounded-full"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image */}
            {blog.featured_image && (blog.featured_image.large || blog.featured_image.full) && (
              <div className="w-full h-64 md:h-[400px] relative rounded-lg overflow-hidden mb-8">
                <BaseImage
                  src={blog.featured_image.large || blog.featured_image.full}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Author Info Card */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-200">
                  {blog.author?.avatar ? (
                    <BaseImage
                      src={blog.author.avatar}
                      alt={blog.author?.name || 'Author'}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#EA622F] text-white text-lg font-bold">
                      {'K'.toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dr Kamini</p>
                  <p className="text-sm text-gray-600">Reviewed by Dr Soma</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 relative z-10">
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-600 mb-3 block">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Related Posts */}
            {blog.related_posts && blog.related_posts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {blog.related_posts.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      href={`/blog/${relatedBlog.slug}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative overflow-hidden h-40">
                        <BaseImage
                          src={relatedBlog.featured_image?.medium || relatedBlog.featured_image?.thumbnail || "/images/blog_image.png"}
                          alt={relatedBlog.title}
                          width={300}
                          height={160}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gray-500 mb-2">{relatedBlog.date_formatted}</p>
                        <span className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-[#EA622F] transition-colors block">
                          {relatedBlog.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blogs Button */}
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-[#EA622F] text-white rounded-lg hover:bg-[#d55a2a] transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for blog content */}
      <style jsx global>{`
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: 600;
          color: #1f2937;
        }
        .blog-content h1 { font-size: 2em; }
        .blog-content h2 { font-size: 1.75em; }
        .blog-content h3 { font-size: 1.5em; }
        .blog-content h4 { font-size: 1.25em; }
        .blog-content p {
          margin-bottom: 1em;
          line-height: 1.75;
        }
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1em;
          padding-left: 1.5em;
        }
        .blog-content li {
          margin-bottom: 0.5em;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1em 0;
        }
        .blog-content a {
          color: #EA622F;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #d55a2a;
        }
        .blog-content blockquote {
          border-left: 4px solid #EA622F;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
          color: #4b5563;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1em 0;
        }
        .blog-content th,
        .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 0.75em;
          text-align: left;
        }
        .blog-content th {
          background-color: #f9fafb;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

// Generate static paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch all blogs to get their slugs
    const data = await fetchWPBlogs(1, 100);

    const paths = data.blogs?.map((blog) => ({
      params: { slug: blog.slug }
    })) || [];

    return {
      paths,
      fallback: false // Static export requires fallback: false
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: false
    };
  }
};

// Static generation for SEO
export const getStaticProps: GetStaticProps<BlogDetailProps> = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    const blog = await fetchWPBlogBySlug(slug);

    if (!blog) {
      return {
        props: {
          blog: null,
          error: "Blog not found"
        }
      };
    }

    return {
      props: {
        blog
      }
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return {
      props: {
        blog: null,
        error: "Failed to load blog"
      }
    };
  }
};

export default BlogDetail;
