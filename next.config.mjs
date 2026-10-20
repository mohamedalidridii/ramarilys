/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets phones on the local network load the dev server (testing the mobile
  // version). Add the device's IP here if it changes.
  allowedDevOrigins: ["192.168.120.86"],
};

export default nextConfig;
