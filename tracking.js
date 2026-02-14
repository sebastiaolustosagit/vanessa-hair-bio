// Google Tag Manager Event Tracking
function trackEvent(name, params = {}) {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: name,
            ...params
        });
    }
}

// Auto events
document.addEventListener('DOMContentLoaded', () => {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
    });

    // Track lead generation on CTA clicks
    document.querySelectorAll('.cta-btn, .whatsapp-button').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('generate_lead', {
                cta_text: btn.innerText.trim(),
                destination: btn.getAttribute('href')
            });
        });
    });
});
