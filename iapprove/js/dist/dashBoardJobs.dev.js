"use strict";

$(document).ready(function () {
  var jobData = [{
    id: 1,
    productImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job1.png",
    jobNumber: 6789,
    jobName: "Nestie - Heaven Launch",
    jobDescription: "UI Design",
    type: "Smiths",
    stage: "Design Art - V2",
    Identification: {
      cart: 44749,
      anchor: 44729,
      barCode: 9314565457842,
      menu: "Beverages",
      product: "coca-cola",
      calories: "Zero",
      Sugar: "Sugar",
      Diet: "Diet"
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
    members: [{
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img5.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img6.png"
    }]
  }, {
    id: 2,
    productImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job2.png",
    jobNumber: 6790,
    jobName: "Nestie - Heaven Launch",
    jobDescription: "Frontend Design",
    type: "Rahul",
    stage: "Design Art - V3",
    Identification: {
      cart: 44749,
      anchor: 44729,
      barCode: 9314565457842,
      menu: "Beverages",
      product: "coca-cola",
      calories: "Zero",
      Sugar: "Sugar",
      Diet: "Diet"
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
    members: [{
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img1.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img2.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img3.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img4.png"
    }]
  }, {
    id: 3,
    productImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job2.png",
    jobNumber: 6791,
    jobName: "Nestie - Heaven Launch",
    jobDescription: "Backend UI Design",
    type: "Dheeraj",
    stage: "Design Art - V2",
    Identification: {
      cart: 44749,
      anchor: 44729,
      barCode: 9314565457842,
      menu: "Beverages",
      product: "coca-cola",
      calories: "Zero",
      Sugar: "Sugar",
      Diet: "Diet"
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
    members: [{
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img7.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img8.png"
    }, {
      membersnumber: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img9.png"
    }]
  } // Add more job data as needed   180020378
  ]; // Export jobData

  window.jobData = jobData; // Function to create and append table rows

  function appendJobRows(data) {
    var tbody = $('#job-table-body');
    var currentOpenJobId = null; // Track the currently open job

    data.forEach(function (job) {
      var membersHtml = '';
      job.members.forEach(function (member) {
        membersHtml += "<li><img src=\"".concat(member.membersnumber, "\"></li>");
      });
      var row = $("\n        <tr>\n          <td class=\"job-image\"><img src=\"".concat(job.productImg, "\"></td>\n          <td class=\"job-data\">").concat(job.jobNumber, "</td>\n          <td class=\"job-description-data\">\n            <span class=\"info-icon\" data-jobid=\"").concat(job.id, "\">").concat(job.jobName, "</span>\n            <span class=\"folder-icon\" data-jobid=\"").concat(job.id, "\">").concat(job.jobDescription, "</span>\n          </td>\n          <td class=\"type-stage-data\">").concat(job.type, "<br>").concat(job.stage, "</td>\n          <td class=\"identification-data\">\n            <div>\n              <ul class=\"identification-datatop\">\n                <li class=\"cart\">").concat(job.Identification.cart, "</li>\n                <li class=\"anchor\">").concat(job.Identification.anchor, "</li>\n                <li class=\"barCode\">").concat(job.Identification.barCode, "</li>\n              </ul>\n              <ul class=\"identification-databottom\">\n                <li>").concat(job.Identification.menu, "</li>\n                <li>").concat(job.Identification.product, "</li>\n                <li>").concat(job.Identification.calories, "</li>\n                <li>").concat(job.Identification.Sugar, "</li>\n                <li>").concat(job.Identification.Diet, "</li>\n              </ul>\n            </div>\n          </td>     \n          <td class=\"managed-data\">\n            <div class=\"managed-section\">\n              <img src=\"").concat(job.profileImageSrc, "\">\n              <div>\n                <span class=\"fw-bold\">").concat(job.profileName, "</span>\n                <span>").concat(job.profilePosition, "</span>\n              </div>\n            </div>\n          </td>\n          <td class=\"sitting-with-data\">\n            <ul class=\"sitting-members\">").concat(membersHtml, "</ul>\n            <div class=\"progress-box\">\n              <div class=\"progress\" style=\"background:rgba(").concat(job.sittingWith.color, ",0.3);\">\n                <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(job.sittingWith.progress, "%; background:rgb(").concat(job.sittingWith.color, ");\"></div>\n              </div>\n              <span style=\"color:rgb(").concat(job.sittingWith.color, ")\">").concat(job.sittingWith.progress, "%  </span>\n            </div>\n          </td>\n          <td class=\"date-data\">").concat(job.startDate, "<br>").concat(job.dueDate, "</td>\n        </tr>")); // Append the row to the table body

      tbody.append(row); // This is job section data ------------------------------------------------------------- ///
      // Add click event listener to Job title

      row.find('.info-icon').on('click', function () {
        if ($(this).closest("tr").hasClass("current")) {
          // If it does, remove the 'current' class
          $(this).closest("tr").removeClass("current");
        } else {
          $("#job-table-body tr").removeClass("current");
          $(this).closest("tr").addClass("current");
        }

        var jobId = $(this).data('jobid');
        var existingJobDetails = $('#job-details-' + jobId);

        if (jobId === currentOpenJobId) {
          // If the clicked job is already open, close it
          if (existingJobDetails.length) {
            existingJobDetails.remove();
            currentOpenJobId = null;
          }
        } else {
          // Close the currently open job, if any
          if (currentOpenJobId) {
            var currentJobDetails = $('#job-details-' + currentOpenJobId);

            if (currentJobDetails.length) {
              currentJobDetails.remove();
            }
          } // Open the clicked job details


          var detailsRow = $("\n          <tr id=\"job-details-".concat(jobId, "\" class=\"job-details\">\n             <td colspan=\"8\" class=\"pl-0\">\n               <div class=\"art-package\">\n                 <div class=\"art-launch\">\n                   <h3>Art Package - Art Launch </h3>\n                 </div>\n                 <div class=\"art-wrapper d-flex align-items-center\">\n                   <!-- Loop through jobStage data here and generate HTML -->\n                 </div>\n               </div>\n             </td>\n           </tr>")); // Loop through the jobStage data and append card HTML to detailsRow

          jobStage.forEach(function (card) {
            var jobUserHtml = '';

            if (card.jobUser && Array.isArray(card.jobUser)) {
              card.jobUser.forEach(function (jobUsers) {
                jobUserHtml += "<li><img src=\"".concat(jobUsers.jobUserImg, "\"></li>");
              });
            }

            var cardHtml = "              \n             <div class=\"art-package-data ".concat(card.jobTitle, "\">\n                   <div class='card-title d-flex align-items-center justify-content-between'>\n                     <p>").concat(card.jobTitle, "</p>\n                     <img src='").concat(card.jobStag, "' />\n                   </div>\n                   <div class=\"card-text\">\n                     <div class=\"art-date d-flex justify-content-start align-items-center\">\n                       <h5 class='me-2 border-right'>Start:<span>").concat(card.jobStartDate, "</span></h5>\n                       <h5>Due:<span>").concat(card.jobStartDate, "</span></h5>\n                     </div>\n                     <div class=\"art-profile d-flex justify-content-end align-items-center\">\n                     <ul class=\"sitting-members\">").concat(jobUserHtml, "</ul>\n                       <div class='art-profile-info ms-2'>\n                         <h3>").concat(card.jobUserName, "</h3>\n                         <p>").concat(card.jobRol, "</p>\n                       </div>\n                       </div>\n                       <div class=\"progress-box\">\n                        <div class=\"progress\" style=\"background:rgba(").concat(card.sittingWith.color, ",0.3);\">\n                          <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(card.sittingWith.progress, "; background:rgb(").concat(card.sittingWith.color, ");\"></div>\n                        </div>\n                        <span style=\"color:rgb(").concat(card.sittingWith.color, ")\">").concat(card.sittingWith.progress, "</span>\n                      </div>\n                    \n                   </div>\n                 \n             </div>");
            detailsRow.find('.art-wrapper').append(cardHtml);
          }); // Append detailsRow to the table after the clicked row

          $(this).closest('tr').after(detailsRow);
          currentOpenJobId = jobId;
        }
      }); // This is Project section data ------------------------------------------------------------- ///
      // Add click event listener to Project  title

      row.find('.folder-icon').on('click', function () {
        if ($(this).closest("tr").hasClass("current")) {
          // If it does, remove the 'current' class
          $(this).closest("tr").removeClass("current");
        } else {
          $("#job-table-body tr").removeClass("current");
          $(this).closest("tr").addClass("current");
        }

        var jobId = $(this).data('jobid');
        var existingJobDetails = $('#job-details-' + jobId);

        if (jobId === currentOpenJobId) {
          // If the clicked job is already open, close it
          if (existingJobDetails.length) {
            existingJobDetails.remove();
            currentOpenJobId = null;
          }
        } else {
          // Close the currently open job, if any
          if (currentOpenJobId) {
            var currentJobDetails = $('#job-details-' + currentOpenJobId);

            if (currentJobDetails.length) {
              currentJobDetails.remove();
            }
          } // Open the clicked Project details  


          var detailsRow = $("\n         <tr id=\"job-details-".concat(jobId, "\" class=\"job-details\">\n           <td colspan=\"8\" class=\"pl-0\">\n             <div class=\"project-package\">\n               <div class=\"art-launch\">\n                 <h3>Box Packaging  </h3>\n                 <div class=\"project-filter-section\">\n                  <ul>\n                    <li>\n                      <input type=\"checkbox\" />\n                      <span class=\"status-icon active-job\">Active (18)</span>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" />\n                      <span class=\"status-icon hold-job\">On Hold (9)</span>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" />\n                      <span class=\"status-icon future-job\">Future (12)</span>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" />\n                      <span class=\"status-icon completed-job\">Completed (18)</span>\n                    </li>\n                    <li>\n                      <input type=\"checkbox\" />\n                      <span class=\"status-icon all-job\">All (45)</span>\n                    </li>\n                  </ul>\n                 </div>\n                 <div class=\"project-main-date\">\n                 <span><strong>Start: </strong>2023-06-05</span>\n                 <span><strong>Due: </strong>2023-08-21</span>\n                 </div>\n               </div>\n               <div class=\"art-wrapper d-flex align-items-center\">\n                 <!-- Loop through jobStage data here and generate HTML -->\n               </div>\n             </div>\n           </td>\n         </tr>")); // Loop through the jobStage data and append card HTML to detailsRow

          projectStage.forEach(function (projectCard) {
            var projectUserHtml = '';

            if (projectCard.projectJobUser && Array.isArray(projectCard.projectJobUser)) {
              projectCard.projectJobUser.forEach(function (projectUsers) {
                projectUserHtml += "<li><img src=\"".concat(projectUsers.projectUserImg, "\"></li>");
              });
            }

            var projectJobMamberHTML = '';

            if (projectCard.projectJobMambers && Array.isArray(projectCard.projectJobMambers)) {
              projectCard.projectJobMambers.forEach(function (projectJobMamberList) {
                projectJobMamberHTML += "<span>".concat(projectJobMamberList.projectJobMamberName, "</span>");
              });
            }

            var projectCardHtml = "              \n           <div class=\"art-package-data ".concat(projectCard.projectJobTitle, "\">\n                 <div class='card-title d-flex align-items-center justify-content-between'>\n                   <div class=\"project-job-titles\">\n                    <span>Packaging ").concat(projectCard.projectJobTitle, "</span>\n                    <span>").concat(projectCard.projectJobSubTitle, "</span>\n                   </div>\n                   <img src='").concat(projectCard.projectJobStag, "' />\n                 </div>\n                 <div class=\"card-text\">\n                   <div class=\"art-date d-flex  justify-content-between align-items-center\">\n                   <div class=\"project-job-img\">\n                    <span class=\"project-img-box\">\n                      <img src=\"").concat(projectCard.projectJobLogo, "\" />\n                    </span>\n                    <span class=\"\">\n                    ").concat(projectCard.projectJobNumber, "\n                    </span>\n                   </div>                   \n                   <div class=\"project-job-date\">\n                     <span><strong>Start: </strong>").concat(projectCard.projectJobStartDate, "</span>\n                     <span><strong>Due: </strong>").concat(projectCard.projectJobEndDate, "</span>\n                     </div>\n                   </div>\n                  <div class=\"project-job-info\">\n                    <div class=\"project-job-left\">\n                      <h3>").concat(projectCard.projectJobName, "</h3>\n                      <div class=\"project-job-qty-info\">\n                        <span class=\"project-job-cart\">").concat(projectCard.projectJobCart, "</span>\n                        <span class=\"project-job-anchor\">").concat(projectCard.projectJobAnchor, "</span>\n                        <span class=\"project-job-bar\">").concat(projectCard.projectJobBar, "</span>\n                      </div>\n                     \n                    </div>\n                    <div class=\"project-job-right\">\n                    <ul class=\"sitting-members\">").concat(projectUserHtml, "</ul>\n                    <div class=\"progress-box\">\n                      <div class=\"progress\" style=\"background:rgba(").concat(projectCard.sittingWith.color, ",0.3);\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(projectCard.sittingWith.progress, "; background:rgb(").concat(projectCard.sittingWith.color, ");\"></div>\n                      </div>\n                      <span style=\"color:rgb(").concat(projectCard.sittingWith.color, ")\">").concat(projectCard.sittingWith.progress, "</span>\n                    </div>\n                    </div>\n                    <div class=\"project-job-member\">\n                    ").concat(projectJobMamberHTML, "\n                    </div>\n                  </div> \n                 </div>\n               \n           </div>");
            detailsRow.find('.art-wrapper').append(projectCardHtml);
          }); // Append detailsRow to the table after the clicked row

          $(this).closest('tr').after(detailsRow);
          currentOpenJobId = jobId;
        }
      });
    });
  } // Call the function to append job rows


  appendJobRows(jobData);
  var jobStage = [{
    id: 1,
    jobTitle: 'Brief',
    jobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/check.png',
    jobStartDate: '2023-06-05',
    jobEndDate: '2023-08-21',
    jobUserName: 'Denial Jeo',
    jobRol: 'Approver',
    jobUser: [{
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "",
      progress: ''
    }
  }, {
    id: 2,
    jobTitle: 'Design',
    jobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    jobStartDate: '2023-06-05',
    jobEndDate: '2023-08-21',
    jobUserName: '',
    jobRol: '',
    jobUser: [{
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img3.png"
    }, {
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img4.png"
    }, {
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img1.png"
    }, {
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img2.png"
    }, {
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img5.png"
    }, {
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/sitting-img6.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 80 + '%'
    }
  }, {
    id: 3,
    jobTitle: 'Produce',
    jobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
    jobStartDate: '2023-06-05',
    jobEndDate: '2023-08-21',
    jobUserName: 'Alex Finn',
    jobRol: 'Manager',
    jobUser: [{
      jobUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile3.png"
    }],
    sittingWith: {
      color: '',
      progress: ''
    }
  }]; // Project stopPropagation();

  var projectStage = [{
    id: 1,
    projectJobTitle: 'active',
    projectType: 'Brief',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 2,
    projectJobTitle: 'future',
    projectType: 'Brief',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 3,
    projectJobTitle: 'active',
    projectType: 'Design',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 4,
    projectJobTitle: 'completed',
    projectType: 'Design',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/completed.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 5,
    projectJobTitle: 'future',
    projectType: 'Production',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/time.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 6,
    projectJobTitle: 'active',
    projectType: 'Production',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 7,
    projectJobTitle: 'hold',
    projectType: 'Publishing',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/hold.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 8,
    projectJobTitle: 'active',
    projectType: 'Publishing',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/play.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 9,
    projectJobTitle: 'hold',
    projectType: 'Publishing',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/hold.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }, {
    id: 10,
    projectJobTitle: 'completed',
    projectType: 'Design',
    projectJobSubTitle: 'Label',
    projectJobStag: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/completed.png',
    projectJobLogo: 'https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/box-packaging.png',
    projectJobNumber: '9874',
    projectJobStartDate: '2023-06-05',
    projectJobEndDate: '2023-08-21',
    projectJobName: 'Test Area - BH Empire',
    projectJobCart: '44749',
    projectJobAnchor: '44729',
    projectJobBar: '9314565256256',
    projectJobMambers: [{
      projectJobMamberName: 'John West'
    }, {
      projectJobMamberName: 'Retail'
    }, {
      projectJobMamberName: 'Canned Fish'
    }],
    projectJobUserName: 'Denial Jeo',
    projectJobRol: 'Approver',
    projectJobUser: [{
      projectUserImg: "https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/job-profile2.png"
    }],
    sittingWith: {
      color: "40, 167, 69",
      progress: 50 + '%'
    }
  }];
  window.projectStage = projectStage;
});