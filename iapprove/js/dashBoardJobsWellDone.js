const allCardData = [
  {
      id: 1,
      title: 'Bluebirds Containers 100gms',
      barcode: '19310139011463',
      productCode: '#6472',
      brand: 'Bluebirds Pvt.Ltd',
      date: '24th April 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card1.png',
      idN: [
          { cartD: '1', idD: '2' }
      ]
  },
  {
      id: 2,
      title: 'Second Card',
      barcode: '123456789',
      productCode: '#1234',
      brand: 'Brand X',
      date: '15th May 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card2.png',
  },
  {
      id: 3,
      title: 'Third Card',
      barcode: '987654321',
      productCode: '#5678',
      brand: 'Brand Y',
      date: '1st June 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card3.png',
  },
  {
      id: 4,
      title: 'Second Card',
      barcode: '123456789',
      productCode: '#1234',
      brand: 'Brand X',
      date: '15th May 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card4.png',
  },
  {
      id: 5,
      title: 'Third Card',
      barcode: '987654321',
      productCode: '#5678',
      brand: 'Brand Y',
      date: '1st June 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card5.png',
  },
  {
      id: 6,
      title: 'Bluebirds Containers 100gms',
      barcode: '19310139011463',
      productCode: '#6472',
      brand: 'Bluebirds Pvt.Ltd',
      date: '24th April 2023',
      imageUrl: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobsWellDone/card6.png',
  },
];

// Function to create and append table rows
function appendJobRows(data) {
  const tbody = document.getElementById('jobWellDone');
  data.forEach(job => {
    const row = document.createElement('div');
    row.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${job.imageUrl}">
        <div class="card-body">
          <div class="card-title h5">${job.title}</div>
          <div class="card-data">
            <div class="row">
              <div class="col-md-6">
                <div class="card-data-top">
                  <div class="card-data mb-3">
                    <h5>Bar Code</h5>
                    <span>${job.barcode}</span>
                  </div>
                  <div class="card-data">
                    <h5>Brand</h5>
                    <span>${job.brand}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-data-bottom">
                  <div class="card-data mb-3">
                    <h5>Product Code</h5>
                    <span>${job.productCode}</span>
                  </div>
                  <div class="card-data">
                    <h5>Date</h5>
                    <span>${job.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    tbody.appendChild(row);
  });
}

// Call the function to append job rows
appendJobRows(allCardData);


