import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="p-4 flex justify-between items-center">
      <div class="text-white text-2xl font-bold">Portfolio</div>
      <div class="space-x-6">
        <a href="#" class="text-white hover:text-blue-200">Home</a>
        <a href="#" class="text-white hover:text-blue-200">CV</a>
        <a href="#" class="text-white hover:text-blue-200">Hire me</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16 text-center">
      <img src="https://via.placeholder.com/150" alt="Profile" class="profile-image mx-auto mb-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-white mb-4">Hello! I'm John Doe</h1>
        <p class="text-white/90 mb-8">
          A passionate developer with expertise in web development and machine learning.
          I strive to create elegant solutions and meaningful experiences through code.
        </p>
        <button class="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition">
          Hire me
        </button>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-12">SPECIAL SKILLS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Machine Learning -->
          <div class="text-center p-6">
            <div class="skill-icon mx-auto mb-4">🤖</div>
            <h3 class="font-bold mb-2">Machine Learning</h3>
            <p class="text-gray-600">
              Experienced in developing ML models and implementing AI solutions for real-world problems.
            </p>
          </div>

          <!-- Development -->
          <div class="text-center p-6">
            <div class="skill-icon mx-auto mb-4">💻</div>
            <h3 class="font-bold mb-2">Web Development</h3>
            <p class="text-gray-600">
              Proficient in modern web technologies and frameworks, creating responsive and dynamic applications.
            </p>
          </div>

          <!-- Problem Solving -->
          <div class="text-center p-6">
            <div class="skill-icon mx-auto mb-4">🎯</div>
            <h3 class="font-bold mb-2">Problem Solving</h3>
            <p class="text-gray-600">
              Strong analytical skills with a focus on delivering efficient and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-white py-8">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center space-x-6 mb-4">
          <a href="#" class="text-gray-600 hover:text-blue-500">About me</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Contact me</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Projects</a>
        </div>
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-gray-600 hover:text-blue-500">GitHub</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">LinkedIn</a>
          <a href="#" class="text-gray-600 hover:text-blue-500">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
`