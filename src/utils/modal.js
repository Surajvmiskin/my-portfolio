export const initializeModal = () => {
  window.openHireForm = () => {
    document.getElementById('hireModal').classList.remove('hidden');
  };

  window.closeHireForm = () => {
    document.getElementById('hireModal').classList.add('hidden');
  };

  window.handleHireSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send this data to your backend
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your interest! I will get back to you soon.');
    closeHireForm();
  };

  // Close modal when clicking outside
  document.getElementById('hireModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'hireModal') {
      closeHireForm();
    }
  });
};