export const HireMe = () => `
  <div id="hireModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Hire Me</h2>
        <button onclick="closeHireForm()" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <form id="hireForm" onsubmit="handleHireSubmit(event)" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input type="text" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Smith">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
          <select required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select a project type</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App</option>
            <option value="ml">Machine Learning</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
          <textarea required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe your project..."></textarea>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
          <select required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select budget range</option>
            <option value="small">$1,000 - $5,000</option>
            <option value="medium">$5,000 - $10,000</option>
            <option value="large">$10,000+</option>
          </select>
        </div>
        
        <button type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Submit Request
        </button>
      </form>
    </div>
  </div>
`