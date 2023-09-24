// Complete the js code
let   memoryUsage =0;
const limit = 250; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements
let ans= document.getElementById("memory");
// Function to generate DOM elements
const generateElements = () => {
  // complete the function
	 for (let i = 0; i < 10000; i++) {
        const element = document.createElement('div');
        element.textContent = `Element ${i}`;
        document.body.appendChild(element);
      }
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  // complete the function
	 const elements = document.querySelectorAll('div');
      elements.forEach(element => {
        document.body.removeChild(element);
      });
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
	 const usedMemoryBytes = performance.memory.usedJSHeapSize;
      const usedMemoryMB = usedMemoryBytes / (1024 * 1024);
      memoryUsage = usedMemoryMB.toFixed(2);
      ans.textContent = `Memory Usage: ${memoryUsage} MB`;

      if (memoryUsage >= limit) {
        alert(`Memory usage has exceeded ${memoryLimitMB} MB. Please optimize your actions to reduce memory consumption.`);
      }
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
