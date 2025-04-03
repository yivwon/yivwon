document.addEventListener('DOMContentLoaded', function() {
  // Masonry layout for Play page
  if (document.querySelector('.masonry-grid')) {
      const grid = document.querySelector('.masonry-grid');
      const items = document.querySelectorAll('.masonry-item');
      
      // Function to resize grid items based on their content
      function resizeGridItems() {
          items.forEach(item => {
              const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
              const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
              const rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
              item.style.gridRowEnd = "span " + rowSpan;
          });
      }

      // Initial resize
      window.addEventListener('load', resizeGridItems);
      window.addEventListener('resize', resizeGridItems);
      
      // Resize when images load
      const allImages = document.querySelectorAll('.masonry-item img');
      allImages.forEach(img => {
          img.addEventListener('load', resizeGridItems);
      });
  }
  
  // Marquee effect for home page
  const marquee = document.querySelector('.marquee');
  if (marquee) {
      const marqueeContent = marquee.innerHTML;
      marquee.innerHTML = marqueeContent + marqueeContent;
  }
});