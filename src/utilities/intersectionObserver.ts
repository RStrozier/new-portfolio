// IntersectionObserver.ts
export function setupIntersectionObserver() {
    // Get all the art elements on the page
    const scrollElements = document.querySelectorAll<HTMLElement>('.scroll-piece');
  
    // Set up the Intersection Observer options
    const observerOptions: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No additional margin
      threshold: 0.5 // Trigger when 50% of the element is in view
    };
  
    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Function to handle the intersection events
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // The art element is in view, do something!
          console.log('Scrolling past:', entry.target);
        }
      });
    }
  
    // Start observing the art elements
    scrollElements.forEach(element => {
      observer.observe(element);
    });
  
    // Clean up the observers when the component is unmounted
    return () => {
      scrollElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }