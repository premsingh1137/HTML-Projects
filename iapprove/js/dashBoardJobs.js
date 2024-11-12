

$(document).ready(function() {
  const jobData = [
    {
      id: 1,
      productImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job1.png",
      jobNumber: 6789,
      jobName: "Nestie - Heaven Launch",
      jobDescription: "UI Design",
      type: "Smiths",
      stage: "Design Art - V2",
      Identification:{
        cart:44749,
        anchor:44729,
        barCode:9314565457842,
        menu: "Beverages",
        product:"coca-cola",
        calories:"Zero",
        Sugar:"Sugar",
        Diet:"Diet"
      },
      profileImageSrc: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile1.png",
      profileName: "John Hut",
      profilePosition: "Manager",
      startDate: "16 Jan 2020",
      dueDate: "20 Jan 2020",
      sittingWith: {
        progress: 50,
        color: "40, 167, 69"
      },
      members:[
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img5.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img6.png"
        }
      ]
    },
    { 
      id: 2,
      productImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job2.png",    
      jobNumber: 6790,
      jobName: "Nestie - Heaven Launch",
      jobDescription: "Frontend Design",
      type: "Rahul",
      stage: "Design Art - V3",
      Identification:{
        cart:44749,
        anchor:44729,
        barCode:9314565457842,
        menu: "Beverages",
        product:"coca-cola",
        calories:"Zero",
        Sugar:"Sugar",
        Diet:"Diet"
      },
      profileImageSrc: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
      profileName: "John Hut",
      profilePosition: "Manager",
      startDate: "16 Jan 2020",
      dueDate: "20 Jan 2020",
      sittingWith: {
        progress: 80,
        color: "255, 54, 54"
      },
      members:[
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img1.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img2.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img3.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img4.png"
        }
      ]
    },
    {
      id: 3,
      productImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job2.png",
      jobNumber: 6791,
      jobName: "Nestie - Heaven Launch",
      jobDescription: "Backend UI Design",
      type: "Dheeraj",
      stage: "Design Art - V2",
      Identification:{
        cart:44749,
        anchor:44729,
        barCode:9314565457842,
        menu: "Beverages",
        product:"coca-cola",
        calories:"Zero",
        Sugar:"Sugar",
        Diet:"Diet"
      },
      profileImageSrc: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile1.png",
      profileName: "John Hut",
      profilePosition: "Manager",
      startDate: "16 Jan 2020",
      dueDate: "20 Jan 2020",
      sittingWith: {
        progress: 50,
        color: "40, 167, 69"
      },
      members:[
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img7.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img8.png"
        },
        {
          membersnumber:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img9.png"
        }
      ]
    }
    // Add more job data as needed   180020378
  ];
// Export jobData
window.jobData = jobData;
  // Function to create and append table rows
  function appendJobRows(data) {
    const tbody = $('#job-table-body');
    let currentOpenJobId = null; // Track the currently open job

    data.forEach(job => {
      let membersHtml = '';
      job.members.forEach(member => {
        membersHtml += `<li><img src="${member.membersnumber}"></li>`;
      });
      const row = $(`
        <tr>
          <td class="job-image"><img src="${job.productImg}"></td>
          <td class="job-data">${job.jobNumber}</td>
          <td class="job-description-data">
            <span class="info-icon" data-jobid="${job.id}">${job.jobName}</span>
            <span class="folder-icon" data-jobid="${job.id}">${job.jobDescription}</span>
          </td>
          <td class="type-stage-data">${job.type}<br>${job.stage}</td>
          <td class="identification-data">
            <div>
              <ul class="identification-datatop">
                <li class="cart">${job.Identification.cart}</li>
                <li class="anchor">${job.Identification.anchor}</li>
                <li class="barCode">${job.Identification.barCode}</li>
              </ul>
              <ul class="identification-databottom">
                <li>${job.Identification.menu}</li>
                <li>${job.Identification.product}</li>
                <li>${job.Identification.calories}</li>
                <li>${job.Identification.Sugar}</li>
                <li>${job.Identification.Diet}</li>
              </ul>
            </div>
          </td>     
          <td class="managed-data">
            <div class="managed-section">
              <img src="${job.profileImageSrc}">
              <div>
                <span class="fw-bold">${job.profileName}</span>
                <span>${job.profilePosition}</span>
              </div>
            </div>
          </td>
          <td class="sitting-with-data">
            <ul class="sitting-members">${membersHtml}</ul>
            <div class="progress-box">
              <div class="progress" style="background:rgba(${job.sittingWith.color},0.3);">
                <div class="progress-bar" role="progressbar" style="width: ${job.sittingWith.progress}%; background:rgb(${job.sittingWith.color});"></div>
              </div>
              <span style="color:rgb(${job.sittingWith.color})">${job.sittingWith.progress}%  </span>
            </div>
          </td>
          <td class="date-data">${job.startDate}<br>${job.dueDate}</td>
        </tr>`);

      // Append the row to the table body
      tbody.append(row);

// This is job section data ------------------------------------------------------------- ///
      // Add click event listener to Job title
      row.find('.info-icon').on('click', function() {
      if ($(this).closest("tr").hasClass("current")) {
        // If it does, remove the 'current' class
        $(this).closest("tr").removeClass("current");
    } else {
      $("#job-table-body tr").removeClass("current");      
        $(this).closest("tr").addClass("current");
    }   
        
        const jobId = $(this).data('jobid');
        const existingJobDetails = $('#job-details-' + jobId);

        if (jobId === currentOpenJobId) {
          // If the clicked job is already open, close it
          if (existingJobDetails.length) {
            existingJobDetails.remove();
            currentOpenJobId = null;
          }
        } else {
          // Close the currently open job, if any
          if (currentOpenJobId) {
            const currentJobDetails = $('#job-details-' + currentOpenJobId);
            if (currentJobDetails.length) {
              currentJobDetails.remove();
            }
          }

           // Open the clicked job details
           const detailsRow = $(`
          <tr id="job-details-${jobId}" class="job-details">
             <td colspan="8" class="pl-0">
               <div class="art-package">
                 <div class="art-launch">
                   <h3>Art Package - Art Launch </h3>
                 </div>
                 <div class="art-wrapper d-flex align-items-center">
                   <!-- Loop through jobStage data here and generate HTML -->
                 </div>
               </div>
             </td>
           </tr>`);

         // Loop through the jobStage data and append card HTML to detailsRow
                   
         jobStage.forEach(card => {
          let jobUserHtml = '';
          if (card.jobUser && Array.isArray(card.jobUser)) {
            card.jobUser.forEach(jobUsers => {
              jobUserHtml += `<li><img src="${jobUsers.jobUserImg}"></li>`;
            });
          }
        
           const cardHtml = `              
             <div class="art-package-data ${card.jobTitle}">
                   <div class='card-title d-flex align-items-center justify-content-between'>
                     <p>${card.jobTitle}</p>
                     <img src='${card.jobStag}' />
                   </div>
                   <div class="card-text">
                     <div class="art-date d-flex justify-content-start align-items-center">
                       <h5 class='me-2 border-right'>Start:<span>${card.jobStartDate}</span></h5>
                       <h5>Due:<span>${card.jobStartDate}</span></h5>
                     </div>
                     <div class="art-profile d-flex justify-content-end align-items-center">
                     <ul class="sitting-members">${jobUserHtml}</ul>
                       <div class='art-profile-info ms-2'>
                         <h3>${card.jobUserName}</h3>
                         <p>${card.jobRol}</p>
                       </div>
                       </div>
                       <div class="progress-box">
                        <div class="progress" style="background:rgba(${card.sittingWith.color},0.3);">
                          <div class="progress-bar" role="progressbar" style="width: ${card.sittingWith.progress}; background:rgb(${card.sittingWith.color});"></div>
                        </div>
                        <span style="color:rgb(${card.sittingWith.color})">${card.sittingWith.progress}</span>
                      </div>
                    
                   </div>
                 
             </div>`;
           detailsRow.find('.art-wrapper').append(cardHtml);
         });

         // Append detailsRow to the table after the clicked row
         $(this).closest('tr').after(detailsRow);
         currentOpenJobId = jobId;
       }
     });

// This is Project section data ------------------------------------------------------------- ///

     // Add click event listener to Project  title
     row.find('.folder-icon').on('click', function() {
      if ($(this).closest("tr").hasClass("current")) {
        // If it does, remove the 'current' class
        $(this).closest("tr").removeClass("current");
    } else {  
      $("#job-table-body tr").removeClass("current");     
        $(this).closest("tr").addClass("current");
    }
      const jobId = $(this).data('jobid');
      const existingJobDetails = $('#job-details-' + jobId);

      if (jobId === currentOpenJobId) {
        // If the clicked job is already open, close it
        if (existingJobDetails.length) {
          existingJobDetails.remove();
          currentOpenJobId = null;
        }
      } else {
        // Close the currently open job, if any
        if (currentOpenJobId) {
          const currentJobDetails = $('#job-details-' + currentOpenJobId);
          if (currentJobDetails.length) {
            currentJobDetails.remove();
          }
        }
         // Open the clicked Project details  
         
         const detailsRow = $(`
         <tr id="job-details-${jobId}" class="job-details">
           <td colspan="8" class="pl-0">
             <div class="project-package">
               <div class="art-launch">
                 <h3>Box Packaging  </h3>
                 <div class="project-filter-section">
                  <ul>
                    <li>
                      <input type="checkbox" class="status-checkbox" data-status="active" />
                      <span class="status-icon active-job">Active (18)</span>
                    </li>
                    <li>
                      <input type="checkbox" class="status-checkbox"  data-status="hold" />
                      <span class="status-icon hold-job">On Hold (9)</span>
                    </li>
                    <li>
                      <input type="checkbox" class="status-checkbox"  data-status="future" />
                      <span class="status-icon future-job">Future (12)</span>
                    </li>
                    <li>
                      <input type="checkbox" class="status-checkbox"  data-status="completed" />
                      <span class="status-icon completed-job">Completed (18)</span>
                    </li>
                    <li>
                      <input type="checkbox" class="status-checkbox"  data-status="all" checked />
                      <span class="status-icon all-job">All (45)</span>
                    </li>
                  </ul>
                 </div>
                 <div class="project-main-date">
                 <span><strong>Start: </strong>2023-06-05</span>
                 <span><strong>Due: </strong>2023-08-21</span>
                 </div>
               </div>
               <div class="art-wrapper d-flex align-items-center">
                 <!-- Loop through jobStage data here and generate HTML -->
               </div>
             </div>
           </td>
         </tr>`);

       // Loop through the jobStage data and append card HTML to detailsRow
                 
       projectStage.forEach(projectCard => {
        let projectUserHtml = '';        
        if (projectCard.projectJobUser && Array.isArray(projectCard.projectJobUser)) {
          projectCard.projectJobUser.forEach(projectUsers => {
            projectUserHtml += `<li><img src="${projectUsers.projectUserImg}"></li>`;
          });
        }
        let projectJobMamberHTML = '';
        if (projectCard.projectJobMambers && Array.isArray(projectCard.projectJobMambers)) {
          projectCard.projectJobMambers.forEach(projectJobMamberList => {
            projectJobMamberHTML += `<span>${projectJobMamberList.projectJobMamberName}</span>`;
          });
        }
      
         const projectCardHtml = `              
           <div class="art-package-data ${projectCard.projectJobTitle}">
                 <div class='card-title d-flex align-items-center justify-content-between'>
                   <div class="project-job-titles">
                    <span>Packaging ${projectCard.projectJobTitle}</span>
                    <span>${projectCard.projectJobSubTitle}</span>
                   </div>
                   <img src='${projectCard.projectJobStag}' />
                 </div>
                 <div class="card-text">
                   <div class="art-date d-flex  justify-content-between align-items-center">
                   <div class="project-job-img">
                    <span class="project-img-box">
                      <img src="${projectCard.projectJobLogo}" />
                    </span>
                    <span class="">
                    ${projectCard.projectJobNumber}
                    </span>
                   </div>                   
                   <div class="project-job-date">
                     <span><strong>Start: </strong>${projectCard.projectJobStartDate}</span>
                     <span><strong>Due: </strong>${projectCard.projectJobEndDate}</span>
                     </div>
                   </div>
                  <div class="project-job-info">
                    <div class="project-job-left">
                      <h3>${projectCard.projectJobName}</h3>
                      <div class="project-job-qty-info">
                        <span class="project-job-cart">${projectCard.projectJobCart}</span>
                        <span class="project-job-anchor">${projectCard.projectJobAnchor}</span>
                        <span class="project-job-bar">${projectCard.projectJobBar}</span>
                      </div>
                     
                    </div>
                    <div class="project-job-right">
                    <ul class="sitting-members">${projectUserHtml}</ul>
                    <div class="progress-box">
                      <div class="progress" style="background:rgba(${projectCard.sittingWith.color},0.3);">
                        <div class="progress-bar" role="progressbar" style="width: ${projectCard.sittingWith.progress}; background:rgb(${projectCard.sittingWith.color});"></div>
                      </div>
                      <span style="color:rgb(${projectCard.sittingWith.color})">${projectCard.sittingWith.progress}</span>
                    </div>
                    </div>
                    <div class="project-job-member">
                    ${projectJobMamberHTML}
                    </div>
                  </div> 
                 </div>
               
           </div>`;
         detailsRow.find('.art-wrapper').append(projectCardHtml);
       });

       // Append detailsRow to the table after the clicked row
       $(this).closest('tr').after(detailsRow);
       currentOpenJobId = jobId;
     }
   });
   });
 }

 // Call the function to append job rows
 appendJobRows(jobData);


  const jobStage = [
   
    {
      id: 1,
      jobTitle:'Brief',
      jobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/check.png',
      jobStartDate:'2023-06-05',
      jobEndDate:'2023-08-21',
      jobUserName:'Denial Jeo',
      jobRol:'Approver',
      jobUser:[
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
        }
      ],
      sittingWith: {
        color: "",
        progress:''
      },
  },
  {
      id: 2,
      jobTitle:'Design',
      jobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
      jobStartDate:'2023-06-05',
      jobEndDate:'2023-08-21',
      jobUserName:'',
      jobRol:'',
      jobUser:[
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img3.png",
        },
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img4.png",
        },
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img1.png",
        },
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img2.png",
        },
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img5.png",
        },
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img6.png",
        }

      ],
      sittingWith: {
        color: "40, 167, 69",
        progress:80 + '%'
      },
  },
  {
      id: 3,
      jobTitle:'Produce',
      jobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
      jobStartDate:'2023-06-05',
      jobEndDate:'2023-08-21',
      jobUserName:'Alex Finn',
      jobRol:'Manager',
      jobUser:[
        {
          jobUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile3.png",
        }
      ],
      sittingWith: {
        color: '',
        progress:''
      },
  },
  
 
]


// Project stopPropagation();
const projectStage = [
 
  {
    id: 1,
    projectJobTitle:'active',
    projectType:'Brief',
    projectJobSubTitle:'Label',
    projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber:'9874',
    projectJobStartDate:'2023-06-05',
    projectJobEndDate:'2023-08-21',
    projectJobName:'Test Area - BH Empire',
    projectJobCart:'44749',
    projectJobAnchor:'44729',
    projectJobBar:'9314565256256',
    projectJobMambers:[
      {projectJobMamberName:'John West'},
      {projectJobMamberName:'Retail'},
      {projectJobMamberName:'Canned Fish'}
    ],
    projectJobUserName:'Denial Jeo',
    projectJobRol:'Approver',
    projectJobUser:[
      {
        projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
      }
    ],
    sittingWith: {
      color: "40, 167, 69",
      progress:50 + '%'
    },
},
{
    id: 2,
    projectJobTitle:'future',
    projectType:'Brief',
    projectJobSubTitle:'Label',
    projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
    projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber:'9874',
    projectJobStartDate:'2023-06-05',
    projectJobEndDate:'2023-08-21',
    projectJobName:'Test Area - BH Empire',
    projectJobCart:'44749',
    projectJobAnchor:'44729',
    projectJobBar:'9314565256256',
    projectJobMambers:[
      {projectJobMamberName:'John West'},
      {projectJobMamberName:'Retail'},
      {projectJobMamberName:'Canned Fish'}
    ],
    projectJobUserName:'Denial Jeo',
    projectJobRol:'Approver',
    projectJobUser:[
      {
        projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
      }
    ],
    sittingWith: {
      color: "40, 167, 69",
      progress:50 + '%'
    },
},
{
    id: 3,
    projectJobTitle:'active',
    projectType:'Design',
    projectJobSubTitle:'Label',
    projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber:'9874',
    projectJobStartDate:'2023-06-05',
    projectJobEndDate:'2023-08-21',
    projectJobName:'Test Area - BH Empire',
    projectJobCart:'44749',
    projectJobAnchor:'44729',
    projectJobBar:'9314565256256',
    projectJobMambers:[
      {projectJobMamberName:'John West'},
      {projectJobMamberName:'Retail'},
      {projectJobMamberName:'Canned Fish'}
    ],
    projectJobUserName:'Denial Jeo',
    projectJobRol:'Approver',
    projectJobUser:[
      {
        projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
      }
    ],
    sittingWith: {
      color: "40, 167, 69",
      progress:50 + '%'
    },
},
{
  id: 4,
  projectJobTitle:'completed',
  projectType:'Design',
  projectJobSubTitle:'Label',
  projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/completed.png',
  projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
  projectJobNumber:'9874',
  projectJobStartDate:'2023-06-05',
  projectJobEndDate:'2023-08-21',
  projectJobName:'Test Area - BH Empire',
  projectJobCart:'44749',
  projectJobAnchor:'44729',
  projectJobBar:'9314565256256',
  projectJobMambers:[
    {projectJobMamberName:'John West'},
    {projectJobMamberName:'Retail'},
    {projectJobMamberName:'Canned Fish'}
  ],
  projectJobUserName:'Denial Jeo',
  projectJobRol:'Approver',
  projectJobUser:[
    {
      projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
    }
  ],
  sittingWith: {
    color: "40, 167, 69",
    progress:50 + '%'
  },
},
{
id: 5,
projectJobTitle:'future',
projectType:'Production',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
{
id: 6,
projectJobTitle:'active',
projectType:'Production',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
{
id: 7,
projectJobTitle:'hold',
projectType:'Publishing',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/hold.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
{
id: 8,
projectJobTitle:'active',
projectType:'Publishing',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
{
id: 9,
projectJobTitle:'hold',
projectType:'Publishing',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/hold.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
{
id: 10,
projectJobTitle:'completed',
projectType:'Design',
projectJobSubTitle:'Label',
projectJobStag:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/completed.png',
projectJobLogo:'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
projectJobNumber:'9874',
projectJobStartDate:'2023-06-05',
projectJobEndDate:'2023-08-21',
projectJobName:'Test Area - BH Empire',
projectJobCart:'44749',
projectJobAnchor:'44729',
projectJobBar:'9314565256256',
projectJobMambers:[
  {projectJobMamberName:'John West'},
  {projectJobMamberName:'Retail'},
  {projectJobMamberName:'Canned Fish'}
],
projectJobUserName:'Denial Jeo',
projectJobRol:'Approver',
projectJobUser:[
  {
    projectUserImg:"https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png",
  }
],
sittingWith: {
  color: "40, 167, 69",
  progress:50 + '%'
},
},
]
window.projectStage = projectStage;
});


