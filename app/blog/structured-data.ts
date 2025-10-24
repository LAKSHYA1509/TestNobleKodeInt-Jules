export function generateBlogStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Noble Kode Blog',
    description: 'Industry insights and expert articles on software development, digital marketing, and business management.',
    publisher: {
      '@type': 'Organization',
      name: 'Noble Kode',
      logo: {
        '@type': 'ImageObject',
        url: 'https://noblekode.com/logo.png'
      }
    },
    url: 'https://noblekode.com/blog'
  };
}
