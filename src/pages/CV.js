import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { HireMe } from '../components/HireMe'

export const CV = () => `
  <div class="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
    ${Navigation()}
    
    <div class="container mx-auto px-4 py-16">
      <!-- Education Section -->
      <h2 class="text-3xl font-bold text-center text-white mb-12">EDUCATION</h2>
      <div class="max-w-3xl mx-auto space-y-8 mb-16">
        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-xl">Bachelor of Engineering (B.E.) in Electrical & Electronics</h3>
              <div class="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm my-2">
                VTU Engineering University, India
              </div>
              <p class="text-gray-600">CGPA: 8.1</p>
            </div>
            <span class="text-gray-500">01/2022 - Present</span>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-xl">High School in Electrical & Electronics</h3>
              <div class="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm my-2">
                St. PU Memorial High School, India
              </div>
              <p class="text-gray-600">Percentage: 73.5%</p>
            </div>
            <span class="text-gray-500">07/2018 - 10/2021</span>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-xl">10th Grade</h3>
              <div class="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm my-2">
                St. Anne English Medium High School, India
              </div>
              <p class="text-gray-600">Percentage: 83.52%, State level education, Karnataka board</p>
            </div>
            <span class="text-gray-500">07/2017 - 06/2018</span>
          </div>
        </div>
      </div>

      <!-- Work Experience Section -->
      <h2 class="text-3xl font-bold text-center text-white mb-12">WORK EXPERIENCE</h2>
      <div class="max-w-3xl mx-auto space-y-8 mb-16">
        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-bold text-xl">Full Stack Developer</h3>
              <div class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm my-2">
                Dynamic Information Technology Private
              </div>
            </div>
            <span class="text-gray-500">01/2024 - Present</span>
          </div>
          <p class="text-gray-600">
            Developed and maintained web applications using a full stack of technologies including HTML, CSS, JavaScript, Python, Django and MySQL.
          </p>
        </div>

        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-bold text-xl">AI Fundamentals Internship Project</h3>
              <div class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm my-2">
                Microsoft AI Program
              </div>
            </div>
            <span class="text-gray-500">03/2022 - 06/2022</span>
          </div>
          <p class="text-gray-600">
            Developed a Keras-based DAB chatbot achieving an accuracy of 85% on the evaluation set.
            Implemented a multi-layer attention mechanism to handle diverse question types, resulting in a 10% improvement in accuracy.
          </p>
        </div>

        <div class="bg-white rounded-lg p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="font-bold text-xl">Part-time Job at RemoteBase</h3>
              <div class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm my-2">
                Remote Work
              </div>
            </div>
            <span class="text-gray-500">12/2023</span>
          </div>
          <p class="text-gray-600">
            Learning & impacting AI. Contributing to NLP & CV tasks to enhance AI models, driving real-world application advancements.
            Actively Growing. Applying best practices in NLP & CV, eager to learn and contribute to future impactful AI projects.
          </p>
        </div>
      </div>

      <!-- Skills & Contact Section -->
      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg p-6">
          <h3 class="font-bold text-xl mb-4">Skills</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Python</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Machine Learning and Deep learning</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">JavaScript</span>
                <span>80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6">
          <h3 class="font-bold text-xl mb-4">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-blue-600 mr-3">📅</span>
              <span>01/06/2002</span>
            </div>
            <div class="flex items-center">
              <span class="text-blue-600 mr-3">👤</span>
              <span>Suraj Vinod Miskin</span>
            </div>
            <div class="flex items-center">
              <span class="text-blue-600 mr-3">📞</span>
              <span>+91 80952 93563</span>
            </div>
            <div class="flex items-center">
              <span class="text-blue-600 mr-3">📧</span>
              <span>surajvmiskin@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${Footer()}
    ${HireMe()}
  </div>
`