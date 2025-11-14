// Function to highlight rows containing "remove"
function highlightRemoveRows() {
  const tdElements = document.querySelectorAll('td');
  
  tdElements.forEach(td => {
    if (td.textContent.includes('REMOVE')) {
      // Find the parent <tr> element and highlight the entire row
      const row = td.closest('tr');
      if (row) {
        row.style.border = '2px solid red';
        
        // Also set border on all cells in the row for better visibility
        const cells = row.querySelectorAll('td, th');
        cells.forEach(cell => {
          cell.style.borderTop = '2px solid red';
          cell.style.borderBottom = '2px solid red';
        });
        // First and last cell get side borders
        if (cells.length > 0) {
          cells[0].style.borderLeft = '2px solid red';
          cells[cells.length - 1].style.borderRight = '2px solid red';
        }
      }
    }
  });
}

// Run on initial load
highlightRemoveRows();

// Watch for dynamic content changes (Salesforce Lightning is a SPA)
const observer = new MutationObserver(() => {
  highlightRemoveRows();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});