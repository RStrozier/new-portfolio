export function setupIntersectionObserver() {
    // Get all the art elements on the page
    const scrollElementsLeft = document.querySelectorAll<HTMLElement>('.scroll-piece-left');
    const scrollElementsRight = document.querySelectorAll<HTMLElement>('.scroll-piece-right');
  
    // Set up the Intersection Observer options
    const observerOptionsLeft: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No additional margin
      threshold: 0.15 // Trigger when 50% of the element is in view
    };
  
    const observerOptionsRight: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No additional margin
      threshold: 0.15 // Trigger when 50% of the element is in view
    };
  
    // Create the Intersection Observer for left-sliding elements
    const observerLeft = new IntersectionObserver(handleIntersectionLeft, observerOptionsLeft);
  
    // Create the Intersection Observer for right-sliding elements
    const observerRight = new IntersectionObserver(handleIntersectionRight, observerOptionsRight);
  
    // Function to handle the intersection events for left-sliding elements
    function handleIntersectionLeft(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // The art element is in view, add the 'slide-in-left' class
          entry.target.classList.add('slide-in-left');
          console.log("slide-in-left: " + entry.target.classList);
        }
      });
    }
  
    // Function to handle the intersection events for right-sliding elements
    function handleIntersectionRight(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // The art element is in view, add the 'slide-in-right' class
          entry.target.classList.add('slide-in-right');
          console.log("slide-in-right: " + entry.target.classList);
        } 
      });
    }
  
    // Start observing the left-sliding elements
    scrollElementsLeft.forEach(element => {
      observerLeft.observe(element);
    });
  
    // Start observing the right-sliding elements
    scrollElementsRight.forEach(element => {
      observerRight.observe(element);
    });
  
    // Clean up the observers when the component is unmounted
    return () => {
      scrollElementsLeft.forEach(element => {
        observerLeft.unobserve(element);
      });
  
      scrollElementsRight.forEach(element => {
        observerRight.unobserve(element);
      });
    };
  }