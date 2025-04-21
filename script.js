function addRecommendation() {
    const textInput = document.getElementById('recommendationInput');
    const nameInput = document.getElementById('recommenderName');
  
    const text = textInput.value.trim();
    const name = nameInput.value.trim() || "Anonymous";
  
    if (text === "") {
      alert("Recommendation cannot be empty.");
      return;
    }
  
    // Create a new card using same style as existing ones
    const newCard = document.createElement('div');
    newCard.className = 'recommendation-card';
    newCard.innerHTML = `<p>"${text}"</p><h4>— ${name}</h4>`;
  
    // Append to the recommendations grid
    const container = document.querySelector('.recommendations-grid');
    container.appendChild(newCard);
  
    // Clear input fields
    textInput.value = "";
    nameInput.value = "";

    alert("Thank you for submitting a recommendation!");
}
  