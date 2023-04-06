const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e) {
  const tabItem = e.target;
  
  // it will remove all show and border classes
  removeBorder();
  removeShow();
  
  // Add border to current tab item
  tabItem.classList.add('tab-border');
  
  // Grab content item from DOM
  const tabContentItemId = tabItem.dataset.tab;
  const tabContentItem = document.querySelector(`#${tabContentItemId}`);
  
  // Add show class
  tabContentItem.classList.add('show');
}
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;
  
  // Perform validation or other logic here
  
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);
});
// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});