// Search functionality for report numbers
function searchReport() {
    const reportNumber = document.getElementById('reportSearch').value.trim().toUpperCase();

    if (!reportNumber) {
        alert('Please enter a report number');
        return;
    }

    // Check if it matches the SBLB pattern (basic validation)
    if (!reportNumber.startsWith('SBLB')) {
        alert('Please enter a valid report number (e.g., SBLB260001)');
        return;
    }

    // Update the report number on the page
    updateReportNumber(reportNumber);

    // Scroll to top to show the updated report
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clear the search input
    document.getElementById('reportSearch').value = '';
}

// Function to update the report number displayed on the page
function updateReportNumber(reportNumber) {
    // Update the report number in the stats section
    const reportValueElement = document.querySelector('.stat-item .value');
    if (reportValueElement) {
        reportValueElement.textContent = reportNumber;
    }

    // Update the page title
    document.title = `Soochak Bharat Labs - ${reportNumber}`;

    // Optional: You can also update the URL without reloading
    // This helps with bookmarking specific reports
    if (window.history && window.history.pushState) {
        window.history.pushState({ reportNumber: reportNumber }, '', `?report=${reportNumber}`);
    }
}

// Function to load report from URL parameter on page load
function loadReportFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const reportNumber = urlParams.get('report');

    if (reportNumber) {
        updateReportNumber(reportNumber.toUpperCase());
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', () => {
    // Load report from URL if present
    loadReportFromURL();

    const searchInput = document.getElementById('reportSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchReport();
            }
        });
    }

    // Add simple entrance animations
    const elements = document.querySelectorAll('.detail-row, .stat-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
