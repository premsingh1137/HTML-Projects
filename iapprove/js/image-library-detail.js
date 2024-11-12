// Define tabledataArray with two elements
const tabledataArray = [
  {
      FinishedArtRef: "6589",
      assetType: "Packaging Art",
      mainFile: "30917446_30917446_720056_2x12x90g_FU__Arcil_3523431.pdf ( 514 kb )",
      lowResPdf: "44749",
      hiResPdf: "30917446_30917446_720056_2x12x90g_FU__Arcil_3523431.pdf ( 514 kb )",
      prodNo: "1111",
      artworkNo: "111111",
      briefType: "eagle_hsr_update",
      tags:"Eagle , Legal"
  },
  {
      FinishedArtRef: "1234",
      assetType: "Illustration",
      mainFile: "example.pdf",
      lowResPdf: "789",
      hiResPdf: "example.pdf",
      prodNo: "2222",
      artworkNo: "222222",
      briefType: "phoenix_design_update",
      tags: "Phoenix, Creative"
  }
];

// HTML content to be rendered dynamically
const dynamicHTML = `
  <div class="row">
    <div class="col-md-12 table-header"><span>Asset</span></div>
    <div class="col-md-12">
      <div class="row img-lib-table-data">
        <div class="col-md-4"><span>FinishedArt for Ref</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].FinishedArtRef}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Asset Type</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].assetType}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Main File</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].mainFile}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Low Res PDF</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].lowResPdf}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>HiRes PDF</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].hiResPdf}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>ProdNo</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].prodNo}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Artwork No</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].artworkNo}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Brief Type</span></div>
        <div class="col-md-8"><span>${tabledataArray[0].briefType}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Tags</span></div>
        <div class="col-md-8"><span class="tag-border me-2">${tabledataArray[0].tags.split(',')[0]}</span>
        <span class="tag-border">${tabledataArray[0].tags.split(',')[1]}</span></div>
      </div>
    </div>
  </div>
`;



//2nd HTML content to be rendered dynamically
const dynamicHTML2 = `
  <div class="row">
    <div class="col-md-12 table-header"><span>Workflow</span></div>
    <div class="col-md-12">
      <div class="row img-lib-table-data">
        <div class="col-md-4"><span>FinishedArt for Ref</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].FinishedArtRef}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Asset Type</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].assetType}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Main File</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].mainFile}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Low Res PDF</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].lowResPdf}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>HiRes PDF</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].hiResPdf}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>ProdNo</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].prodNo}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Artwork No</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].artworkNo}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Brief Type</span></div>
        <div class="col-md-8"><span>${tabledataArray[1].briefType}</span></div>
        <div class="seprator"></div>
        <div class="col-md-4"><span>Tags</span></div>
        <div class="col-md-8"><span class="tag-border me-2">${tabledataArray[1].tags.split(',')[0]}</span>
        <span class="tag-border">${tabledataArray[1].tags.split(',')[1]}</span></div>
      </div>
    </div>
  </div>
`;


// Get the wrapper element where you want to append the dynamic content for the first element
const tableWrapper = document.getElementById('tableWrapper');

// Set the inner HTML content of the wrapper for the first element
tableWrapper.innerHTML = dynamicHTML;

// Get the wrapper element where you want to append the dynamic content for the second element
const table_wrapper = document.getElementById('table_wrapper');

// Append the second dynamic HTML content to the wrapper for the second element
table_wrapper.innerHTML += dynamicHTML2;
