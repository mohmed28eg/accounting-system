   import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // إعدادات التكوين الخاصة بك هنا
   };

   if (process.env.NODE_ENV === 'development') {
     setupDevPlatform();
   }

   export default nextConfig;
