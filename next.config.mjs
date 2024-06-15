/** @type {import('next').NextConfig} */
const nextConfig = {
    // Fix the error Error: Invalid src prop 
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname: "img.clerk.com"
            }
        ]
    }
};

export default nextConfig;
