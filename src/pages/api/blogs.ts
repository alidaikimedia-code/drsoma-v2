import type { NextApiRequest, NextApiResponse } from 'next';

const WP_API_URL = 'https://drsomaplasticsurgery.com.my/wp-json/custom/v1';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { page = '1', per_page = '12', slug, id } = req.query;

    let apiUrl = '';

    // Determine which endpoint to call
    if (slug && typeof slug === 'string') {
      // Single blog by slug - remove any trailing slashes
      const cleanSlug = slug.replace(/\/+$/, '');
      apiUrl = `${WP_API_URL}/blog/${cleanSlug}`;
    } else if (id && typeof id === 'string') {
      // Single blog by ID
      apiUrl = `${WP_API_URL}/blogs/${id}`;
    } else {
      // All blogs with pagination
      apiUrl = `${WP_API_URL}/blogs?page=${page}&per_page=${per_page}`;
    }

    console.log('Proxying request to:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'NextJS-Proxy/1.0',
      },
    });

    // Get the response text first
    const responseText = await response.text();
    console.log('WordPress API response status:', response.status);

    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse WordPress response:', responseText.substring(0, 500));
      return res.status(500).json({
        error: 'Invalid JSON response from WordPress',
        details: responseText.substring(0, 200)
      });
    }

    // If WordPress returned an error response, still pass it through
    if (!response.ok) {
      console.error('WordPress API error:', response.status, data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: 'Failed to fetch from WordPress API',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
