  document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.querySelector('form');
    
    
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        
        const formData = getFormData();
        
        const validationResult = validateForm(formData);
        if (!validationResult.isValid) {
            alert(validationResult.message);
            return;
        }
        
        processOrder(formData);
    });
    
 
    function getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            product: document.getElementById('product').value,
            quantity: document.getElementById('quantity').value,
            address: document.getElementById('Address').value.trim()
        };
    }
    
  
    function validateForm(formData) {
      
        if (!formData.name || !formData.phone || !formData.email || 
            !formData.address || formData.quantity < 1) {
            return { isValid: false, message: 'Please fill in all required fields and ensure quantity is at least 1' };
        }
        
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }
        
       
        const phoneRegex = /^0\d{9,10}$/;
        if (!phoneRegex.test(formData.phone)) {
            return { isValid: false, message: 'Please enter a valid South African phone number (10-11 digits starting with 0)' };
        }
        
        return { isValid: true, message: '' };
    }
    
   
    function processOrder(formData) {
        
        const prices = {
            'chips': 15,
            'Cold Drink (500ml)': 20,
            'Chocolate Bar': 12,
            'Hot Dog':15,
            'bread': 25,
            'Sweets': 10,
            'Bread': 18,
            'Pie': 22
        };
        
        const total = prices[formData.product] * formData.quantity;
        
        
        alert(`ORDER CONFIRMED!\n\nName: ${formData.name}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nTotal: R${total}\n\nWe'll deliver to:\n${formData.address}\n\nThank you for your order!`);
        
       
        orderForm.reset();
    }
});