let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
      domains: ['res.cloudinary.com' ,  "api.microlink.io", 'images.unsplash.com'],
  
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    return [
      {
        source: '/services/PageBreadcrumb/web-development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/mobile-app',
        destination: '/services/app-development',
        permanent: true,
      },
      {
        source: '/mobile-app',
        destination: '/services/app-development',
        permanent: true,
      },
      {
        source: '/services/management',
        destination: '/services/project-management',
        permanent: true,
      },
      {
        source: '/services/product-prototying',
        destination: '/product-prototyping',
        permanent: true,
      },
      {
        source: '/services/marketing',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/web-development-company',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/mobile-app-development-company-in-india',
        destination: '/services/app-development',
        permanent: true,
      },
      {
        source: '/graphic-design-in-india',
        destination: '/services/graphic-designing',
        permanent: true,
      },
      {
        source: '/ppc',
        destination: '/services/digital-marketing-services-in-delhi',
        permanent: true,
      },
      {
        source: '/seo-services-in-delhi-india',
        destination: '/services/digital-marketing-services-in-delhi',
        permanent: true,
      },
      {
        source: '/digital-marketing',
        destination: '/services/digital-marketing-services-in-delhi',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/portfolio/1',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/blog/1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/portfolio/2',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/blog/3',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/portfolio/3',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
