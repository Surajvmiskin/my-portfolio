const SkillCard = (icon, title, description) => `
  <div class="text-center p-6">
    <div class="skill-icon mx-auto mb-4">${icon}</div>
    <h3 class="font-bold mb-2">${title}</h3>
    <p class="text-gray-600">${description}</p>
  </div>
`

export const Skills = () => `
  <div class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-12">SPECIAL SKILLS</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${SkillCard('🤖', 'Machine Learning', 'Experienced in developing ML models and implementing AI solutions for real-world problems.')}
        ${SkillCard('💻', 'Web Development', 'Proficient in modern web technologies and frameworks, creating responsive and dynamic applications.')}
        ${SkillCard('🎯', 'Problem Solving', 'Strong analytical skills with a focus on delivering efficient and scalable solutions.')}
      </div>
    </div>
  </div>
`