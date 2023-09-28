/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    swcMinify: true,
    images : {
        unoptimized : true    
    }
}

module.exports = nextConfig