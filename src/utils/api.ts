const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_CMS_API_KEY;

// WordPress Blog API URL
const WP_BLOG_API_URL = 'https://drsomaplasticsurgery.com.my/wp-json/custom/v1';

// WordPress Blog Post Interface
export interface WPBlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: {
    full: string;
    large: string;
    medium: string;
    thumbnail: string;
  };
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
  }[];
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  date: string;
  date_formatted: string;
  modified: string;
  link: string;
  comment_count: number;
  read_time: string;
  related_posts?: WPBlogPost[];
}

// WordPress API Response Interface
export interface WPBlogsResponse {
  success: boolean;
  total_posts: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  blogs: WPBlogPost[];
}

export interface WPSingleBlogResponse {
  success: boolean;
  blog: WPBlogPost;
}

// Fetch WordPress Blogs with Pagination
export const fetchWPBlogs = async (page: number = 1, perPage: number = 12): Promise<WPBlogsResponse> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    // Always use direct WordPress API call (API routes don't work with static export)
    const apiUrl = `${WP_BLOG_API_URL}/blogs?page=${page}&per_page=${perPage}`;
    const fetchOptions: RequestInit = {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      mode: 'cors',
      signal: controller.signal,
    };

    console.log('Fetching blogs from:', apiUrl);

    const response = await fetch(apiUrl, fetchOptions);

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Blogs fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching WordPress blogs:', error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('CORS Error: Make sure WordPress has proper CORS headers enabled');
    }
    return {
      success: false,
      total_posts: 0,
      total_pages: 0,
      current_page: 1,
      per_page: perPage,
      blogs: []
    };
  }
};

// Fetch Single WordPress Blog by ID
export const fetchWPBlogById = async (id: number): Promise<WPBlogPost | null> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    // Always use direct WordPress API call (API routes don't work with static export)
    const apiUrl = `${WP_BLOG_API_URL}/blogs/${id}`;

    console.log('Fetching blog by ID:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WPSingleBlogResponse = await response.json();
    console.log('Blog fetched by ID:', data);

    if (data.success && data.blog) {
      return data.blog;
    }

    return null;
  } catch (error) {
    console.error('Error fetching WordPress blog by ID:', error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('CORS Error: Make sure WordPress has proper CORS headers enabled');
    }
    return null;
  }
};

// Fetch Single WordPress Blog by Slug
export const fetchWPBlogBySlug = async (slug: string): Promise<WPBlogPost | null> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    // Clean the slug - remove trailing slashes
    const cleanSlug = slug.replace(/\/+$/, '').trim();

    // First, fetch blogs list to find the blog ID by slug
    const apiUrl = `${WP_BLOG_API_URL}/blogs?per_page=100`;

    console.log('Fetching blogs to find slug:', cleanSlug);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('API Error:', response.status);
      return null;
    }

    const data = await response.json();

    // Find blog by slug
    let foundBlog: WPBlogPost | null = null;
    if (data.success && data.blogs && data.blogs.length > 0) {
      foundBlog = data.blogs.find((blog: WPBlogPost) => blog.slug === cleanSlug) || null;
    }

    if (!foundBlog) {
      console.log('Blog not found with slug:', cleanSlug);
      return null;
    }

    console.log('Found blog with ID:', foundBlog.id);

    // Now fetch the full blog data by ID to get complete details including images
    const fullBlog = await fetchWPBlogById(foundBlog.id);

    if (fullBlog) {
      return fullBlog;
    }

    // Fallback to the blog from list if fetchWPBlogById fails
    return foundBlog;
  } catch (error) {
    console.error('Error fetching WordPress blog by slug:', error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('CORS Error: Make sure WordPress has proper CORS headers enabled');
    }
    return null;
  }
};

export interface Testimonial {
  id: string;
  message: string;
  rating: number;
  status: string;
  isFeatured?: boolean;
  created_at: string;
  clientName?: string;
  clientPhone?: string;
  clientAvatar?: {
    alt?: string;
    size?: number;
    type?: string;
    url?: string;
  };
  author?: {
    name?: string;
    avatarInfo?: { url?: string };
  };
  // Add any other fields you need
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning fallback data');
      return getFallbackTestimonials();
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_URL}/private-api/testimonials`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // If your API returns { data: [...] }
    return data.data || data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    
    // If it's a network error or timeout, return fallback data
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, using fallback testimonials');
        return getFallbackTestimonials();
      }
    }
    
    return [];
  }
};

// Fallback testimonials data
const getFallbackTestimonials = (): Testimonial[] => {
  return [
    {
      id: '1',
      message: "Dr. Soma's expertise in plastic surgery is exceptional. The results exceeded my expectations and the care I received was outstanding.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-15T10:00:00Z',
      author: {
        name: 'Sarah Johnson',
        avatarInfo: { url: '/images/testimonials_image_one.png' }
      }
    },
    {
      id: '2',
      message: "I'm so grateful for Dr. Soma's skill and professionalism. The entire experience was smooth and the outcome is amazing.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-10T14:30:00Z',
      author: {
        name: 'Michael Chen',
        avatarInfo: { url: '/images/testimonials_image_two.png' }
      }
    },
    {
      id: '3',
      message: "Dr. Soma and his team provided excellent care throughout my treatment. Highly recommended for anyone considering plastic surgery.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-05T09:15:00Z',
      author: {
        name: 'Emily Rodriguez',
        avatarInfo: { url: '/images/testimonials_image_three.png' }
      }
    },
    {
      id: '4',
      message: "The results from my procedure with Dr. Soma are incredible. Professional, caring, and truly skilled in his field.",
      rating: 5,
      status: 'published',
      isFeatured: false,
      created_at: '2024-01-01T16:45:00Z',
      author: {
        name: 'David Kim',
        avatarInfo: { url: '/images/testimonials_image_one.png' }
      }
    },
    {
      id: '5',
      message: "Dr. Soma's attention to detail and patient care is remarkable. I couldn't be happier with my experience and results.",
      rating: 5,
      status: 'published',
      isFeatured: false,
      created_at: '2023-12-28T11:20:00Z',
      author: {
        name: 'Lisa Thompson',
        avatarInfo: { url: '/images/testimonials_image_two.png' }
      }
    }
  ];
};

