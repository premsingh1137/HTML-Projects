$(document).ready(function() {
  const folderData = [
      {
          id: 1,
          folderName:"simon SHREDDIES, CPUK, Cereal",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",  
          stages: [
            {
                stageName: "Stage1",
                projects: [
                    {projectName: "Project 1",
                    },
                ]
            },
            {
                stageName: "Stage2",
                projects: [
                    {projectName: "Project 2",
                    },
                ]
            },{
              stageName: "Stage3",
             
          },
          {
              stageName: "Stage4",
             
          }
        ]  
          
      },
      {
          id: 2,
          folderName:"1i00 - Upload Approvals - Contact Sheets",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",   
          stages: [
            {
              stageName: "Stage1",
             
          },
          {
              stageName: "Stage2",
             
          },{
            stageName: "Stage3",
            
        },
        {
            stageName: "Stage4",
          
        }
        ]  
      },
      {
          id: 3,
          folderName:" Test Area - BH Empire Nescafe Mild Roast, z closed Panasonic, Smiths Photography",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",  
          stages: [
            {
              stageName: "Stage1",
             
          },
          {
              stageName: "Stage2",
             
          },{
            stageName: "Stage3",
            
        },
        {
            stageName: "Stage4",
          
        }
        ]  
      },
      // Add more folder data as needed
     
  ];

  function appendFolderRows(folderDatas) {
      const div = $('#projectKanbanView');
      div.append('<div class="accordion">'); // Open the accordion div

      folderDatas.forEach(projectlist => {
        
          const row = $(`
          <div class="accordion-hearder">           
            <div class="art-launch">
              <h3>${projectlist.folderName}</h3>              
              <div class="folder-date-section">
                <div class="project-main-date">
                  <span><strong>Start: </strong>${projectlist.folderStartDate}</span>
                  <span><strong>Due: </strong>${projectlist.folderEndDate}</span>
                </div>
                <div class="projectbutton-section">
                  <a href="javascript:void(0)" class="btn add-new-job" title="Add New job"><i class="fas fa-plus"></i> Add New job</a>
                  <a href="javascript:void(0)" class="btn edit-folder" title="Edit Folder"><i class="far fa-edit"></i> Edit Folder</a>
                </div>
              </div>
            </div>
          </div>
              <div class="content">
                  <div class="folder-view-sections folder-list-view">
                    <div class="kanban-list-view">
                    <!-- This secction is a loop data-->
                      ${generateStagesHtml(projectlist.stages)}
                        <div>
                      </div>
                    </div>  
                  </div>
                  
              </div>`);

          div.find('.accordion').append(row); // Append row inside accordion div

          //const div = row.find('#folderCardView');



         
          function generateStagesHtml(stages) {
            let stagesHtml = '';
            stages.forEach(stage => {
                stagesHtml += `
                    <div class="kanban-stage-section">
                        <h3 class="kanban-stage-heading">${stage.stageName}</h3>
                        <div class="project-package"><div id="folderCardView" class="art-wrapper">
                           
                        </div></div>
                    </div>`;
            });
            return stagesHtml;
        }

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
                       ${projectCard.projectType}
                       <!-- <img src='${projectCard.projectJobStag}' />-->
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
               row.find('#folderCardView').append(projectCardHtml);
           });

      });

      div.append('</div>'); // Close the accordion div
  }

  appendFolderRows(folderData);
});
