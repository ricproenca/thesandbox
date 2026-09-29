import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /spark and /showcase were removed while the club is starting out; send old links home.
  // Not permanent: a real showcase is planned once students have built something.
  async redirects() {
    return [
      { source: "/spark", destination: "/#ideas", permanent: false },
      { source: "/showcase", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
