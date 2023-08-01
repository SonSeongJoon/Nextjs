/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/products/deleted_forever',
                destination: '/products',
                permanent: false,
            }

        ]
    }
}

module.exports = nextConfig
