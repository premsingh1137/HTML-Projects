var dataArray = [
    {
        title: "Legal Test",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "12 Feb, 24",
        size: "514 kb",
        imgSrc: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/product-label.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Moove Chocolate 500ml Label",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "01 Feb, 24",
        size: "514 kb",
        imgSrc: "/images/product-img-1.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Berri Classic Orange Juice 2.4L",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "28 March, 24",
        size: "514 kb",
        imgSrc: "/images/product-img-2.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Sar Bega FastPack Test_2",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "26 Dec,23",
        size: "514 kb",
        imgSrc: "/images/product-img-3.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Berri Classic Orange Juice 2.4L",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "12 Dec,23",
        size: "514 kb",
        imgSrc: "/images/product-img-4.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Moove Chocolate 500ml Label",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "26 Jan,24",
        size: "514 kb",
        imgSrc: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/product-label.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },

    {
        title: "Tasmanian Heritage Red 1kg",
        chartValue: "44749",
        barValue: "9314565457842",
        anchorValue: "44749",
        partValue: "Packaging Art",
        date: "29 Jan,24",
        size: "514 kb",
        imgSrc: "/images/product-img-1.png",
        fileFormats: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/file-format.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/note.png"],
        otherLinks: ["https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/pdf.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/mail.png", "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box.png"]
    },
    // Add more product objects as needed...
];

var container = document.getElementById("product-label-cards-container");

function generateCard(data) {
    var cardDiv = document.createElement("div");
    cardDiv.className = "col-lg-2 card";

    var cardNew = document.createElement("div");
    cardNew.className = "card-new";
    cardDiv.appendChild(cardNew);

    var cardImgDiv = document.createElement("div");
    cardImgDiv.className = "card-img";

    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = data.imgSrc;
    img.alt = "Product label";
    cardImgDiv.appendChild(img);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = data.title;
    cardBody.appendChild(title);

    var rowDiv = document.createElement("div");
    rowDiv.className = "row product-desc";

    rowDiv.innerHTML = `
        <div class="col-md-4 col">
            <div class="img-wrap"><p class="job-card-chart">${data.chartValue}</p></div>  
        </div>
        <div class="col-md-8 col">
        <div class="img-wrap"><p class="job-card-bar">${data.barValue}</p></div>
            
        </div>
        <div class="col-md-4 col">
        <div class="img-wrap"><p class="job-card-anchor">${data.anchorValue}</p></div>
       
        </div>
        <div class="col-md-8 col"><p class="job-card-part">${data.partValue}</p>
           
        </div>
        <div class="col-md-6 col">
        <p class="job-card-part">${data.date}</p>
           
        </div>
        <div class="col-md-6 col">
            <span class="job-card-size">${data.size}</span>
        </div>
    `;

    cardBody.appendChild(rowDiv);

    var cardBottom = document.createElement("div");
    cardBottom.className = "card-bottom row";

    var formatDiv = document.createElement("div");
    formatDiv.className = "col-md-6 icons text-start";
    data.fileFormats.forEach(function (formatSrc) {
        var formatLink = document.createElement("a");
        formatLink.href = "#";
        formatLink.target = "_blank";
        var formatImg = document.createElement("img");
        formatImg.src = formatSrc;
        formatImg.alt = "File format";
        formatLink.appendChild(formatImg);  
        formatDiv.appendChild(formatLink);
    });

    cardBottom.appendChild(formatDiv);

    var otherDiv = document.createElement("div");
    otherDiv.className = "col-md-6 text-end icons";
    data.otherLinks.forEach(function (otherSrc) {
        var otherLink = document.createElement("a");
        otherLink.href = "#";
        otherLink.target = "_blank";
        var otherImg = document.createElement("img");
        otherImg.src = otherSrc;
        otherImg.alt = "Other link";
        otherLink.appendChild(otherImg);
        otherDiv.appendChild(otherLink);
    });

    cardBottom.appendChild(otherDiv);

    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardBottom);

    return cardDiv;
}

// Function to toggle grid cards visibility
function toggleGridCardsVisibility() {
    var container = document.getElementById("product-label-cards-container");
    container.classList.toggle("show"); // Toggle the "show" class
  }

  // Add event listener to the view grid button
  var viewGridButton = document.getElementById("view-grid-button");
  viewGridButton.addEventListener("click", toggleGridCardsVisibility);

  // Generate grid cards
  dataArray.forEach(function(data) {
    var card = generateCard(data);
    container.appendChild(card);
  });

// Function to sort data based on the selected sort option
function sortData(data, sortOption) {
    if (sortOption === "1") {
        console.log("Sorting by Newest First");
        return data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest First
    } else if (sortOption === "2") {
        console.log("Sorting by Oldest First");
        return data.sort((a, b) => new Date(a.date) - new Date(b.date)); // Oldest First
    } else {
        console.log("No sorting");
        return data; // No sorting
    }
}

// Function to render cards
function renderCards(data) {
    console.log("Rendering cards:", data);
    container.innerHTML = ""; // Clear container
    data.forEach(function (data) {
        var card = generateCard(data);
        container.appendChild(card);
    });
}

// Function to render all cards by default
function renderAllCardsByDefault() {
    var sortOption = $('.form-select').val(); // Get the selected sort option value
    console.log("Default sort option:", sortOption);
    var defaultSortedData = sortData(dataArray.slice(), sortOption); // Sort all products by default
    renderCards(defaultSortedData); // Render all cards sorted by default option
}

// Function to render filtered and sorted cards
function renderFilteredAndSortedCards(startDate, endDate, sortOption) {
    console.log("Filtering and sorting cards...");
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Sort Option:", sortOption);
    
    // Filter the dataArray based on the selected date range
    var filteredData = dataArray.filter(function (data) {
        var productDate = new Date(data.date);
        return (!startDate && !endDate) || (productDate >= startDate && productDate <= endDate);
    });

    // Sort the filteredData based on the selected sort option
    var sortedData = sortData(filteredData, sortOption);

    // Render filtered and sorted cards
    renderCards(sortedData);
}

// Initialize date range picker and sorting functionality
$(document).ready(function() {
    // Find the earliest and latest dates in the data array
    var dates = dataArray.map(data => new Date(data.date));
    var minDate = new Date(Math.min.apply(null, dates));
    var maxDate = new Date(Math.max.apply(null, dates));

    // Initialize date range picker with the default range covering all dates in the data
    $('input[name="daterange"]').daterangepicker({
        opens: 'center',
        startDate: minDate,
        endDate: maxDate
    });

    // Initialize sorting functionality
    $('.form-select').on('change', function() {
        var startDate = $('input[name="daterange"]').data('daterangepicker').startDate.toDate();
        var endDate = $('input[name="daterange"]').data('daterangepicker').endDate.toDate();
        var sortOption = $(this).val(); // Get the selected sort option value
        console.log("Sort option changed:", sortOption);
        renderFilteredAndSortedCards(startDate, endDate, sortOption); // Render filtered and sorted cards
    });

    // Initialize date range picker change event
    $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
        var startDate = picker.startDate.toDate();
        var endDate = picker.endDate.toDate();
        var sortOption = $('.form-select').val(); // Get the selected sort option value
        console.log("Date range selected:", startDate, endDate);
        console.log("Sort option selected:", sortOption);
        renderFilteredAndSortedCards(startDate, endDate, sortOption); // Render filtered and sorted cards
    });

    // Render all cards by default
    renderAllCardsByDefault();
});

//product-row-list
// Iterate over dataArray
// Function to render filtered cards
function renderFilteredCards(startDate, endDate) {
    // Clear existing cards
    document.getElementById('productRowList').innerHTML = "";

    // Filter dataArray based on the selected date range
    var filteredData = dataArray.filter(function(product) {
        var productDate = new Date(product.date);
        return (!startDate && !endDate) || (productDate >= startDate && productDate <= endDate);
    });

    // Iterate over filtered data and create product cards
    filteredData.forEach(function(product) {
        // Create a new product card div
        var productCard = document.createElement('div');
        productCard.className = 'row';
        
        // Set inner HTML for the product card
        productCard.innerHTML = `
            <div class="col-md-2">
                <div class="card-img">
                    <img src="${product.imgSrc}" alt="${product.title}">
                </div>
            </div>
            <div class="col-md-10 card-body">
                <h5 class"card-title">${product.title}</h5>
                <div class="row product-desc">
                    <div class="col-md-4 col">
                        <div class="img-wrap">
                            <p class="job-card-chart">${product.chartValue}</p>
                        </div>
                    </div>
                    <div class="col-md-4 col">
                        <div class="img-wrap">
                            <p class="job-card-bar">${product.barValue}</p>
                        </div>
                    </div>
                    <div class="col-md-4 col">
                        <div class="img-wrap">
                            <p class="job-card-anchor">${product.anchorValue}</p>
                        </div>
                    </div>
                    <div class="col-md-8 col">
                        <p class="job-card-part">${product.partValue}</p>
                    </div>
                    <div class="col-md-6 col">
                        <p class="job-card-part">${product.date}</p>
                    </div>
                    <div class="col-md-6 col">
                        <span class="job-card-size">${product.size}</span>
                    </div>
                </div>
                <div class="row card-bottom">
                    <div class="col-md-6 icons text-start">
                        ${product.fileFormats.map(format => `<a href="#" target="_blank"><img src="${format}" alt="File Format"></a>`).join('')}
                    </div>
                    <div class="col-md-6 text-end icons">
                        ${product.otherLinks.map(link => `<a href="#" target="_blank"><img src="${link}" alt="File Format"></a>`).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Append the product card to the product row list
        document.getElementById('productRowList').appendChild(productCard);
    });
}

// Initialize date range picker and filtering functionality
$(document).ready(function() {
    // Initialize date range picker with default range covering all dates in the data
    $('input[name="daterange"]').daterangepicker({
        opens: 'center',
        autoUpdateInput: false // Prevent automatic update
    });

    // Handle apply event of date range picker
    $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
        var startDate = picker.startDate.format('YYYY-MM-DD');
        var endDate = picker.endDate.format('YYYY-MM-DD');
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
        renderFilteredCards(startDate, endDate);
    });

    // Handle cancel event of date range picker
    $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val(''); // Clear input value
        renderFilteredCards(null, null); // Render all cards
    });

    // Render all cards by default
    renderFilteredCards(null, null);
});


// Function to toggle between grid and list view
function toggleView(viewType) {
    var gridContainer = document.getElementById("product-label-cards-container");
    var listContainer = document.getElementById("productRowList");

    if (viewType === "grid") {
        gridContainer.classList.remove("d-none");
        listContainer.classList.add("d-none");
    } else if (viewType === "list") {
        gridContainer.classList.add("d-none");
        listContainer.classList.remove("d-none");
    }
}

// Add event listener to grid view image
var viewGridImage = document.querySelector('.view-grid');
viewGridImage.addEventListener('click', function() {
    toggleView("grid");
});

// Add event listener to list view image
var viewListImage = document.querySelector('.view-list');
viewListImage.addEventListener('click', function() {
    toggleView("list");
});
