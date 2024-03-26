document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", function() {
        // Get the input value
        var searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    
        // Remove previous highlights
        var previousHighlights = document.querySelectorAll('.highlight');
        previousHighlights.forEach(function(highlight) {
            highlight.parentNode.replaceChild(highlight.firstChild, highlight);
        });
    
        // Check if the search value is empty
        if (searchValue === "") {
            return; // Exit the function early if the search value is empty
        }
    
        // Get all paragraphs with class "text-center"
        var paragraphs = document.querySelectorAll(".text-center");
    
        // Variable to keep track of whether a match is found
        var matchFound = false;
    
        // Loop through each paragraph
        paragraphs.forEach(function(paragraph) {
            // Get the text content of the paragraph
            var paragraphText = paragraph.textContent.toLowerCase();
    
            // Check if the search value exists in the paragraph
            var index = paragraphText.indexOf(searchValue);
            if (index !== -1) {
                // Scroll to the position of the search value and highlight it
                var textNode = paragraph.firstChild;
                while (textNode) {
                    if (textNode.nodeType === 3) {
                        var nodeText = textNode.textContent.toLowerCase();
                        var nodeIndex = nodeText.indexOf(searchValue);
                        if (nodeIndex !== -1) {
                            var range = document.createRange();
                            range.setStart(textNode, nodeIndex);
                            range.setEnd(textNode, nodeIndex + searchValue.length);
    
                            // Apply styling to highlight the search item
                            var span = document.createElement('span');
                            span.classList.add('highlight');
                            span.style.backgroundColor = 'yellow'; // You can customize the highlight style here
                            range.surroundContents(span);
    
                            // Scroll to the position of the search value
                            var rect = range.getBoundingClientRect();
                            window.scrollTo({ top: rect.top + window.pageYOffset - 100, behavior: 'smooth' });
    
                            // Set matchFound to true since a match is found
                            matchFound = true;
    
                            break;
                        }
                    }
                    textNode = textNode.nextSibling;
                }
            }
        });
    
        // If no match is found, display an alert
        if (!matchFound) {
            // alert("No record found.");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No record found.",
                // footer: '<a href="#">Why do I have this issue?</a>',
                customClass: {
                  popup: 'swal-custom' // Apply the custom CSS class to the popup
                }
              });
        }
    });
    
    
    
//popup
 var contactid= document.getElementById("aboutf");
 contactid.style.cursor='pointer';
contactid.addEventListener('click',function(){
   var popupContainer = document.getElementById('popupContainer');
   popupContainer.style.display = 'block';
});

var closeButton= document.getElementById("closeButton");

closeButton.addEventListener('click',function(){
   var popupContainer = document.getElementById('popupContainer');
   popupContainer.style.display = 'none';
});

//popup end


// scroll top btn

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY >= 300) {
        scrollToTopButton.classList.add('show-scroll-top');
    } else {
        scrollToTopButton.classList.remove('show-scroll-top');
    }
});

document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// scroll top btn end


//anchor Scrolling
document.getElementById('contactscroll').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor element
    const targetId = this.getAttribute('href'); // Get the value of the href attribute
    const targetElement = document.querySelector(targetId); // Find the target element
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
    }
});

//anchor Scrolling end 




}); //dom content loaded end

