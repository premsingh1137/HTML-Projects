"use strict";

$(document).ready(function () {
  var jobData = window.jobData;
  var folderData = [{
    id: 1,
    folderName: "simon SHREDDIES, CPUK, Cereal",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21"
  }, {
    id: 2,
    folderName: "1i00 - Upload Approvals - Contact Sheets",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21"
  }, {
    id: 3,
    folderName: " Test Area - BH Empire Nescafe Mild Roast, z closed Panasonic, Smiths Photography",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21"
  } // Add more folder data as needed
  ];

  function appendFolderRows(folderDatas) {
    var div = $('#projectListView');
    div.append('<div class="accordion">'); // Open the accordion div

    folderDatas.forEach(function (projectlist) {
      var row = $("\n          <div class=\"accordion-hearder\">\n            <div class=\"inner-tab-box\">          \n              <ul>            \n              <li><span class=\"title\">View:</span></li>\n            <li><span class=\"inner-tab-button inner-tab-button-active\" data-target=\"folder-list-view\" title=\"List\">List</span></li>\n            <li><span class=\"inner-tab-button\" data-target=\"folder-card-view\" title=\"Card\">Card</span></li>\n              </ul>\n            </div>\n            <div class=\"art-launch\">\n              <h3>".concat(projectlist.folderName, "</h3>\n              <div class=\"project-filter-section\">\n                <ul>\n                  <li>\n                    <input type=\"checkbox\" class=\"status-checkbox\" data-status=\"active\">\n                    <span class=\"status-icon active-job\">Active (18)</span>\n                  </li>\n                  <li>\n                    <input type=\"checkbox\" class=\"status-checkbox\" data-status=\"hold\">\n                    <span class=\"status-icon hold-job\">On Hold (9)</span>\n                  </li>\n                  <li>\n                    <input type=\"checkbox\" class=\"status-checkbox\" data-status=\"future\">\n                    <span class=\"status-icon future-job\">Future (12)</span>\n                  </li>\n                  <li>\n                    <input type=\"checkbox\" class=\"status-checkbox\" data-status=\"completed\">\n                    <span class=\"status-icon completed-job\">Completed (18)</span>\n                  </li>\n                  <li>\n                    <input type=\"checkbox\" class=\"status-checkbox\" data-status=\"all\" checked=\"\">\n                    <span class=\"status-icon all-job\">All (45)</span>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"folder-date-section\">\n                <div class=\"project-main-date\">\n                  <span><strong>Start: </strong>").concat(projectlist.folderStartDate, "</span>\n                  <span><strong>Due: </strong>").concat(projectlist.folderEndDate, "</span>\n                </div>\n                <div class=\"projectbutton-section\">\n                  <a href=\"javascript:void(0)\" class=\"btn add-new-job\" title=\"Add New job\"><i class=\"fas fa-plus\"></i> Add New job</a>\n                  <a href=\"javascript:void(0)\" class=\"btn edit-folder\" title=\"Edit Folder\"><i class=\"far fa-edit\"></i> Edit Folder</a>\n                </div>\n              </div>\n            </div>\n          </div>\n              <div class=\"content\">\n                  <div class=\"folder-view-sections folder-list-view\">\n                      <div class='table-wrapper'>\n                          <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" class=\"fold-table table\">\n                          <thead>\n                          <tr>\n                              <th><img src='../../../images/jobs/folder.png' /></th>\n                              <th>Job</th>\n                              <th width=\"22%\">Job Description</th>\n                              <th>\n                                  Type<br>\n                                  Stage\n                              </th>\n                              <th width=\"20%\">Identification</th>\n                              <th>Managed By </th>\n                              <th>Sitting With</th>\n                              <th>\n                                  Start Date<br>\n                                  Due Date\n                              </th>\n                          </tr>\n                      </thead> \n                              <tbody id=\"job-table-body\">\n                                  <!-- Job data will be dynamically inserted here -->\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n                  <div class=\"folder-view-sections folder-card-view\" style=\"display: none;\">\n                  <div class=\"project-package\"><div id=\"folderCardView\" class=\"art-wrapper d-flex align-items-center\"></div></div>\n                  </div>\n              </div>"));
      div.find('.accordion').append(row); // Append row inside accordion div
      //const div = row.find('#folderCardView');

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

        var projectCardHtml = "              \n               <div class=\"art-package-data ".concat(projectCard.projectJobTitle, "\">\n                     <div class='card-title d-flex align-items-center justify-content-between'>\n                       <div class=\"project-job-titles\">\n                        <span>Packaging ").concat(projectCard.projectJobTitle, "</span>\n                        <span>").concat(projectCard.projectJobSubTitle, "</span>\n                       </div>\n                       <img src='").concat(projectCard.projectJobStag, "' />\n                     </div>\n                     <div class=\"card-text\">\n                       <div class=\"art-date d-flex  justify-content-between align-items-center\">\n                       <div class=\"project-job-img\">\n                        <span class=\"project-img-box\">\n                          <img src=\"").concat(projectCard.projectJobLogo, "\" />\n                        </span>\n                        <span class=\"\">\n                        ").concat(projectCard.projectJobNumber, "\n                        </span>\n                       </div>                   \n                       <div class=\"project-job-date\">\n                         <span><strong>Start: </strong>").concat(projectCard.projectJobStartDate, "</span>\n                         <span><strong>Due: </strong>").concat(projectCard.projectJobEndDate, "</span>\n                         </div>\n                       </div>\n                      <div class=\"project-job-info\">\n                        <div class=\"project-job-left\">\n                          <h3>").concat(projectCard.projectJobName, "</h3>\n                          <div class=\"project-job-qty-info\">\n                            <span class=\"project-job-cart\">").concat(projectCard.projectJobCart, "</span>\n                            <span class=\"project-job-anchor\">").concat(projectCard.projectJobAnchor, "</span>\n                            <span class=\"project-job-bar\">").concat(projectCard.projectJobBar, "</span>\n                          </div>\n                         \n                        </div>\n                        <div class=\"project-job-right\">\n                        <ul class=\"sitting-members\">").concat(projectUserHtml, "</ul>\n                        <div class=\"progress-box\">\n                          <div class=\"progress\" style=\"background:rgba(").concat(projectCard.sittingWith.color, ",0.3);\">\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(projectCard.sittingWith.progress, "; background:rgb(").concat(projectCard.sittingWith.color, ");\"></div>\n                          </div>\n                          <span style=\"color:rgb(").concat(projectCard.sittingWith.color, ")\">").concat(projectCard.sittingWith.progress, "</span>\n                        </div>\n                        </div>\n                        <div class=\"project-job-member\">\n                        ").concat(projectJobMamberHTML, "\n                        </div>\n                      </div> \n                    </div>\n               </div>");
        row.find('#folderCardView').append(projectCardHtml);
      });
      var tbody = row.find('#job-table-body'); // Access the table body of this specific row
      // Create and append table rows for each job

      jobData.forEach(function (job) {
        var membersHtml = job.members.map(function (member) {
          return "<li><img src=\"".concat(member.membersnumber, "\"></li>");
        }).join('');
        var tr = $("\n                  <tr>\n                      <td class=\"job-image\"><img src=\"".concat(job.productImg, "\"></td>\n                      <td class=\"job-data\">").concat(job.jobNumber, "</td>\n                      <td class=\"job-description-data\">\n                          <span class=\"info-icon\" data-jobid=\"").concat(job.id, "\">").concat(job.jobName, "</span>                         \n                      </td>\n                      <td class=\"type-stage-data\">").concat(job.type, "<br>").concat(job.stage, "</td>\n                      <td class=\"identification-data\">\n                          <div>\n                              <ul class=\"identification-datatop\">\n                                  <li class=\"cart\">").concat(job.Identification.cart, "</li>\n                                  <li class=\"anchor\">").concat(job.Identification.anchor, "</li>\n                                  <li class=\"barCode\">").concat(job.Identification.barCode, "</li>\n                              </ul>\n                              <ul class=\"identification-databottom\">\n                                  <li>").concat(job.Identification.menu, "</li>\n                                  <li>").concat(job.Identification.product, "</li>\n                                  <li>").concat(job.Identification.calories, "</li>\n                                  <li>").concat(job.Identification.Sugar, "</li>\n                                  <li>").concat(job.Identification.Diet, "</li>\n                              </ul>\n                          </div>\n                      </td>     \n                      <td class=\"managed-data\">\n                          <div class=\"managed-section\">\n                              <img src=\"").concat(job.profileImageSrc, "\">\n                              <div>\n                                  <span class=\"fw-bold\">").concat(job.profileName, "</span>\n                                  <span>").concat(job.profilePosition, "</span>\n                              </div>\n                          </div>\n                      </td>\n                      <td class=\"sitting-with-data\">\n                          <ul class=\"sitting-members\">").concat(membersHtml, "</ul>\n                          <div class=\"progress-box\">\n                              <div class=\"progress\" style=\"background:rgba(").concat(job.sittingWith.color, ",0.3);\">\n                                  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(job.sittingWith.progress, "%; background:rgb(").concat(job.sittingWith.color, ");\"></div>\n                              </div>\n                              <span style=\"color:rgb(").concat(job.sittingWith.color, ")\">").concat(job.sittingWith.progress, "%  </span>\n                          </div>\n                      </td>\n                      <td class=\"date-data\">").concat(job.startDate, "<br>").concat(job.dueDate, "</td>\n                  </tr>"));
        tbody.append(tr); // Append the table row to tbody
      });
    });
    div.append('</div>'); // Close the accordion div
  }

  appendFolderRows(folderData);
});