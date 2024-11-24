export const Hero = () => `
  <div class="container mx-auto px-4 py-16 text-center">
    <img src="https://media.licdn.com/dms/image/v2/D5603AQFy9B8NuQEbPA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694871959534?e=1738195200&v=beta&t=zdL2Wvkrzh8MqYgNyqz2yq2P5UTmPZPvVZ8J_ayTCZI" alt="Profile" class="profile-image mx-auto mb-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-4">Hello! I'm John Doe</h1>
      <p class="text-white/90 mb-8">
        A passionate developer with expertise in web development and machine learning.
        I strive to create elegant solutions and meaningful experiences through code.
      </p>
      <button onclick="openHireForm()" class="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition">
        Hire me
      </button>
    </div>
  </div>
`