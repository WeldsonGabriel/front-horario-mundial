// next.config.js
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/world-time',
          destination: 'http://localhost:8080/api/world-time', // URL do backend Kotlin
        },
      ]
    },
  }
  
  module.exports = nextConfig
  