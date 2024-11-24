export const Navigation = () => `
  <nav class="p-4 flex justify-between items-center">
    <div class="text-white text-2xl font-bold">Portfolio</div>
    <div class="space-x-6">
      <a href="/" data-navigo class="text-white hover:text-blue-200">Home</a>
      <a href="/cv" data-navigo class="text-white hover:text-blue-200">CV</a>
      <a href="#" onclick="openHireForm()" class="text-white hover:text-blue-200">Hire me</a>
    </div>
  </nav>
`