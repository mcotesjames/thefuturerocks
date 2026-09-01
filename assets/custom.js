document.addEventListener("DOMContentLoaded", function () {
  // Function to open the popup based on popup type
  function openPopup(popupType) {
    const popupModal = document.getElementById("popup-modal-" + popupType); // Get the popup by ID (based on the data-popup attribute)
    if (popupModal) {
      popupModal.style.display = "flex"; // Display the popup
      document.body.classList.add("popup-open"); // Add class to body
      console.log("Popup opened, 'popup-open' class added to body.");
    }
  }

function closePopup(popupModal) {
  if (popupModal) {
    console.log("Closing popup:", popupModal);
    popupModal.style.display = "none"; // Hide the popup
    if (document.body.classList.contains("popup-open")) {
      document.body.classList.remove("popup-open"); // Remove class from body
      console.log("'popup-open' class removed from body.");
    } else {
      console.log("'popup-open' class was not found on the body.");
    }
  } else {
    console.log("Popup modal is null or undefined.");
  }
}

  // Add click event listener to info-icons
  document.querySelectorAll(".info-icon").forEach((icon) => {
    icon.addEventListener("click", function (event) {
      event.stopPropagation();
      const popupType = this.getAttribute("data-popup"); // Get the popup type (1 or 2)
      openPopup(popupType); // Open the corresponding popup
    });
  });

  // Add close functionality to all popups
  document.querySelectorAll(".popup-close").forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      const popupModal = this.closest(".popup-modal");
      closePopup(popupModal); // Close the popup
    });
  });

  // Close popup when clicking outside
  window.addEventListener("click", function (event) {
    const openModal = document.querySelector('.popup-modal[style="display: flex;"]');
    if (openModal && event.target === openModal) {
      closePopup(openModal); // Close the modal if clicking outside of it
    }
  });
});




$(document).ready(function () {
  const videoThumbnails = $('.thumbnails .thumbnail--media-video, .thumbnails .thumbnail--media-external_video');

  if (videoThumbnails.length > 0) {
    let videoText = "▶ Video";
    
    if ($('html').attr('lang') === 'ja') { 
      videoText = "▶ ビデオ";
    } else if ($('html').attr('lang') === 'ko') { 
      videoText = "▶ 비디오";
    }

    const playButton = $('<button class="play-video-btn">' + videoText + '</button>'); 

    $('.custom-crous-sect').append(playButton);

    $('.play-video-btn').on('click', function (e) {
      e.preventDefault();

      var videoThumbnail = $('a.thumbnail.thumbnail--media-video').first();

      if (videoThumbnail.length) {
        videoThumbnail.trigger('click');
      }
    });
  }
});



  const labels = document.querySelectorAll('.opt-label');
  const selectElement = document.querySelector('.original-selector');
  const listbox = document.querySelector('.cc-select__listbox.custm_size');
  const readyHeading = listbox.querySelector('.backgrd-col-ready');
  const orderHeading = listbox.querySelector('.backgrd-col-order');
  const listItems = Array.from(listbox.querySelectorAll('.cc-select__option'));

  // Event listener for labels
  labels.forEach(label => {
    label.addEventListener('click', function () {
      const labelValue = label.getAttribute('data-swatch').toLowerCase();

      // Clear existing classes
      listItems.forEach(listItem => listItem.classList.remove('sold-out'));

      // Loop through all options in the select element
      const options = selectElement.querySelectorAll('option');
      options.forEach(option => {
        const optionText = option.textContent.toLowerCase();

        // Check if the label value matches and the option is "out of stock"
        if (optionText.includes(labelValue) && option.getAttribute('data-stock') === "out") {
          const sizeValue = optionText.split('/').pop().trim();

          // Match the sizeValue with the list items and add a class to matched items
          listItems.forEach(listItem => {
            if (listItem.getAttribute('data-value') === sizeValue) {
              listItem.classList.add('sold-out'); // Add 'sold-out' class
            }
          });
        }
      });

      // Rearrange list items
      rearrangeListItems();
    });
  });

  // Function to rearrange list items
  function rearrangeListItems() {
    const soldOutItems = listItems.filter(item => item.classList.contains('sold-out'));
    const inStockItems = listItems.filter(item => !item.classList.contains('sold-out'));

    // Clear listbox content
    listbox.innerHTML = '';

    // Add Ready to Ship heading and in-stock items if available
    if (inStockItems.length > 0) {
      listbox.appendChild(readyHeading);
      inStockItems.forEach(item => listbox.appendChild(item));
    }

    // Add Made to Order heading and sold-out items if available
    if (soldOutItems.length > 0) {
      listbox.appendChild(orderHeading);
      soldOutItems.forEach(item => listbox.appendChild(item));
    }
  }


 document.body.addEventListener("click", function (event) {
        let wishlistButton = event.target.closest(".wk-button");

        if (wishlistButton) {
            console.log("Wishlist Button Clicked");

            setTimeout(() => { 
                let isSelected = wishlistButton.classList.contains("wk-selected");

                if (isSelected) {
                    console.log("✅ Product Added to Wishlist");
                    showWishlistPopup("Product added to wishlist");
                } else {
                    console.log("❌ Product Removed from Wishlist");
                    showWishlistPopup("Product removed from wishlist");
                }
            }, 100);
        }
    });

  function showWishlistPopup(message) {
    let popup = document.querySelector(".wishlist-popup");
    let overlay = document.querySelector(".wishlist-popup-overlay");

    if (!popup) {
        popup = document.createElement("div");
        popup.className = "wishlist-popup";
        document.body.appendChild(popup);
    }

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "wishlist-popup-overlay";
        document.body.appendChild(overlay);
    }

    popup.innerText = message;
    popup.classList.add("show");
    overlay.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }, 3000);
}


