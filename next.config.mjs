/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'title',
                        value: 'ShatterDome Labs',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
