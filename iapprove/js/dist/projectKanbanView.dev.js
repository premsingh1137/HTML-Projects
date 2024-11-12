"use strict";

$(document).ready(function () {
  var folderData = [{
    id: 1,
    folderName: "simon SHREDDIES, CPUK, Cereal",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21",
    stages: [{
      stageName: "Stage1",
      projects: [{
        projectName: "Project 1"
      }]
    }, {
      stageName: "Stage2",
      projects: [{
        projectName: "Project 2"
      }]
    }, {
      stageName: "Stage3"
    }, {
      stageName: "Stage4"
    }]
  }, {
    id: 2,
    folderName: "1i00 - Upload Approvals - Contact Sheets",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21",
    stages: [{
      stageName: "Stage1"
    }, {
      stageName: "Stage2"
    }, {
      stageName: "Stage3"
    }, {
      stageName: "Stage4"
    }]
  }, {
    id: 3,
    folderName: " Test Area - BH Empire Nescafe Mild Roast, z closed Panasonic, Smiths Photography",
    folderStartDate: "2023-06-05",
    folderEndDate: "2023-08-21",
    stages: [{
      stageName: "Stage1"
    }, {
      stageName: "Stage2"
    }, {
      stageName: "Stage3"
    }, {
      stageName: "Stage4"
    }]
  } // Add more folder data as needed
  ];

  function appendFolderRows(folderDatas) {
    var div = $('#projectKanbanView');
    div.append('<div class="accordion">'); // Open the accordion div

    folderDatas.forEach(function (projectlist) {
      var row = $("\n          <div class=\"accordion-hearder\">           \n            <div class=\"art-launch\">\n              <h3>".concat(projectlist.folderName, "</h3>              \n              <div class=\"folder-date-section\">\n                <div class=\"project-main-date\">\n                  <span><strong>Start: </strong>").concat(projectlist.folderStartDate, "</span>\n                  <span><strong>Due: </strong>").concat(projectlist.folderEndDate, "</span>\n                </div>\n                <div class=\"projectbutton-section\">\n                  <a href=\"javascript:void(0)\" class=\"btn add-new-job\" title=\"Add New job\"><i class=\"fas fa-plus\"></i> Add New job</a>\n                  <a href=\"javascript:void(0)\" class=\"btn edit-folder\" title=\"Edit Folder\"><i class=\"far fa-edit\"></i> Edit Folder</a>\n                </div>\n              </div>\n            </div>\n          </div>\n              <div class=\"content\">\n                  <div class=\"folder-view-sections folder-list-view\">\n                    <div class=\"kanban-list-view\">\n                    <!-- This secction is a loop data-->\n                      ").concat(generateStagesHtml(projectlist.stages), "\n                        <div>\n                      </div>\n                    </div>  \n                  </div>\n                  \n              </div>"));
      div.find('.accordion').append(row); // Append row inside accordion div
      //const div = row.find('#folderCardView');

      function generateStagesHtml(stages) {
        var stagesHtml = '';
        stages.forEach(function (stage) {
          stagesHtml += "\n                    <div class=\"kanban-stage-section\">\n                        <h3 class=\"kanban-stage-heading\">".concat(stage.stageName, "</h3>\n                        <div class=\"project-package\"><div id=\"folderCardView\" class=\"art-wrapper\">\n                           \n                        </div></div>\n                    </div>");
        });
        return stagesHtml;
      }

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

        var projectCardHtml = "              \n               <div class=\"art-package-data ".concat(projectCard.projectJobTitle, "\">\n                     <div class='card-title d-flex align-items-center justify-content-between'>\n                       <div class=\"project-job-titles\">\n                        <span>Packaging ").concat(projectCard.projectJobTitle, "</span>\n                        <span>").concat(projectCard.projectJobSubTitle, "</span>\n                       </div>\n                       ").concat(projectCard.projectType, "\n                       <!-- <img src='").concat(projectCard.projectJobStag, "' />-->\n                     </div>\n                     <div class=\"card-text\">\n                       <div class=\"art-date d-flex  justify-content-between align-items-center\">\n                       <div class=\"project-job-img\">\n                        <span class=\"project-img-box\">\n                          <img src=\"").concat(projectCard.projectJobLogo, "\" />\n                        </span>\n                        <span class=\"\">\n                        ").concat(projectCard.projectJobNumber, "\n                        </span>\n                       </div>                   \n                       <div class=\"project-job-date\">\n                         <span><strong>Start: </strong>").concat(projectCard.projectJobStartDate, "</span>\n                         <span><strong>Due: </strong>").concat(projectCard.projectJobEndDate, "</span>\n                         </div>\n                       </div>\n                      <div class=\"project-job-info\">\n                        <div class=\"project-job-left\">\n                          <h3>").concat(projectCard.projectJobName, "</h3>\n                          <div class=\"project-job-qty-info\">\n                            <span class=\"project-job-cart\">").concat(projectCard.projectJobCart, "</span>\n                            <span class=\"project-job-anchor\">").concat(projectCard.projectJobAnchor, "</span>\n                            <span class=\"project-job-bar\">").concat(projectCard.projectJobBar, "</span>\n                          </div>\n                         \n                        </div>\n                        <div class=\"project-job-right\">\n                        <ul class=\"sitting-members\">").concat(projectUserHtml, "</ul>\n                        <div class=\"progress-box\">\n                          <div class=\"progress\" style=\"background:rgba(").concat(projectCard.sittingWith.color, ",0.3);\">\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: ").concat(projectCard.sittingWith.progress, "; background:rgb(").concat(projectCard.sittingWith.color, ");\"></div>\n                          </div>\n                          <span style=\"color:rgb(").concat(projectCard.sittingWith.color, ")\">").concat(projectCard.sittingWith.progress, "</span>\n                        </div>\n                        </div>\n                        <div class=\"project-job-member\">\n                        ").concat(projectJobMamberHTML, "\n                        </div>\n                      </div> \n                    </div>\n               </div>");
        row.find('#folderCardView').append(projectCardHtml);
      });
    });
    div.append('</div>'); // Close the accordion div
  }

  appendFolderRows(folderData);
});