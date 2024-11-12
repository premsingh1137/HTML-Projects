"use strict";

$(document).ready(function () {
  // Get the current URL
  var currentUrl = window.location.pathname; // Add 'active' class to the anchor tag whose href matches the current URL

  $('.nav-list a').each(function () {
    var href = $(this).attr('href');

    if (href === currentUrl) {
      $(this).addClass('active');
    }
  }); // // Get the current page URL
  // var url = window.location.href;
  // // Get the filename from the URL
  // var filename = url.substring(url.lastIndexOf('/') + 1);
  // // Check if the filename starts with '/'
  // if (filename.startsWith('/')) {
  //     // Remove the leading '/'
  //     filename = filename.substring(1);
  // }
  // // Loop through each navigation link
  // $('ul.nav-list li a').each(function(){
  //     // Get the href attribute of the link
  //     var href = $(this).attr('href');
  //     // Check if the href starts with '/'
  //     if (href.startsWith('/')) {
  //         // Remove the leading '/'
  //         href = href.substring(1);
  //     }
  //     // Check if the filename matches the href
  //     if (filename == href){
  //         // Add the 'active' class to the parent <li> element
  //         $(this).addClass('active');
  //     }
  // });
  // Event delegation for dynamically loaded content

  $(document).on('click', '#theme-icon', function () {
    if ($('body').hasClass('dark-theme')) {
      // Switch to light theme
      $('body').removeClass('dark-theme').addClass('light-theme');
      $('#theme-icon').attr('src', 'https://htmlportfolio.siplsolutions.com/iapproveit/images/layout/light.png'); // Optionally, you can save the user's preference in localStorage or a cookie
    } else {
      // Switch to dark theme
      $('body').removeClass('light-theme').addClass('dark-theme');
      $('#theme-icon').attr('src', 'https://htmlportfolio.siplsolutions.com/iapproveit/images/layout/dark.png'); // Optionally, you can save the user's preference in localStorage or a cookie
    }
  });
});
$(function () {
  $("#header").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/layout/header.html"); //  ** Dashbord page comments //
  // Chat section

  $("#chart").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/dashboard/chart/chart.html"); // Chat section

  $("#jobs").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/dashboard/jobs/jobs.html");
  $("#jobsWellDone").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/dashboard/jobsWellDone/jobs-well-done.html"); //  ** Dashbord page comments //
  //  ** Image Library comments //

  $("#imageLibraryLeftbar").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/image-library/image-library-leftbar.html");
  $("#imageLibraryRightbar").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/image-library/image-library-rightbar.html"); //  ** Image Library comments //
  //  ** Image Library Details comments //

  $("#image-library-detail-left-wrap").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/ImageLibraryDetail/ImageLibraryDetailLeftSection.html");
  $("#image-library-detail-right-wrap").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/ImageLibraryDetail/ImageLibraryDetailRightSection.html"); //  ** Image Library Details comments //
  //  ** Job Flow comments //

  $("#jobFlowLeftbar").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/jobFlow/jobFlow-leftbar.html");
  $("#jobFlowRightbar").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/jobFlow/jobFlow-rightbar.html"); //  ** Job Flow comments // 

  $("#footer").load("https://htmlportfolio.siplsolutions.com/iapproveit/component/layout/footer.html");
}); // $(".filter-section").hide();
// Job Flow page new update 

function search() {
  // Get the value entered by the user in the search field   
  var searchValue = $("#searchField").val(); // Get the value entered by the user in the job field

  var jobValue = $("#EnterJob").val(); // Update the display div with the entered search value

  if (searchValue !== "") {
    $("#displayKeyWord").text(searchValue).parent().show(); // Show the parent div if search value is entered
  } // Update the display div with the entered job value


  if (jobValue !== "") {
    $("#displayBrand").text(jobValue).parent().show(); // Show the parent div if job value is entered
  }

  $(".filter-section").show(); // Empty the search fields

  $("#searchField").val("");
  $("#EnterJob").val("");
}

function reset() {
  $(".filter-section").hide();
  $("#displayKeyWord").text("");
  $("#displayBrand").text("");
} // Checkbox filtering


$(document).on('change', '.status-checkbox', function () {
  var statusCheckboxes = $(this).closest('.project-package').find('.status-checkbox');
  var selectedStatuses = statusCheckboxes.filter(':checked').map(function () {
    return $(this).data('status');
  }).get();
  var cards = $(this).closest('.project-package').find('.art-package-data');

  if (selectedStatuses.includes('all')) {
    cards.show();
  } else {
    cards.hide(); // Hide all cards initially
    // Show cards that match any of the selected statuses

    selectedStatuses.forEach(function (status) {
      cards.filter('.' + status).show();
    });
  }
});