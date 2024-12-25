/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.pexels.com"],
    },
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
  };
  
  export default nextConfig;
