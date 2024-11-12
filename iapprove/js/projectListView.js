$(document).ready(function() {
  const jobData = window.jobData;
  const folderData = [
      {
          id: 1,
          folderName:"simon SHREDDIES, CPUK, Cereal",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",      
      },
      {
          id: 2,
          folderName:"1i00 - Upload Approvals - Contact Sheets",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",   
      },
      {
          id: 3,
          folderName:" Test Area - BH Empire Nescafe Mild Roast, z closed Panasonic, Smiths Photography",
          folderStartDate:"2023-06-05",
          folderEndDate:"2023-08-21",   
      },
      // Add more folder data as needed
  ];

  function appendFolderRows(folderDatas) {
      const div = $('#projectListView');
      div.append('<div class="accordion">'); // Open the accordion div

      folderDatas.forEach(projectlist => {
          const row = $(`
          <div class="accordion-hearder">
            <div class="inner-tab-box">          
              <ul>            
              <li><span class="title">View:</span></li>
            <li><span class="inner-tab-button inner-tab-button-active" data-target="folder-list-view" title="List">List</span></li>
            <li><span class="inner-tab-button" data-target="folder-card-view" title="Card">Card</span></li>
              </ul>
            </div>
            <div class="art-launch">
              <h3>${projectlist.folderName}</h3>
              <div class="project-filter-section">
              <ul>
              <li>
                <input type="checkbox" class="status-checkbox"  data-status="active" />
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
                      <div class='table-wrapper'>
                          <table cellspacing="0" cellpadding="0" width="100%" class="fold-table table">
                          <thead>
                          <tr>
                              <th><img src='https://htmlportfolio.siplsolutions.com/iapproveit/images/jobs/folder.png' /></th>
                              <th>Job</th>
                              <th width="22%">Job Description</th>
                              <th>
                                  Type<br>
                                  Stage
                              </th>
                              <th width="20%">Identification</th>
                              <th>Managed By </th>
                              <th>Sitting With</th>
                              <th>
                                  Start Date<br>
                                  Due Date
                              </th>
                          </tr>
                      </thead> 
                              <tbody id="job-table-body">
                                  <!-- Job data will be dynamically inserted here -->
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div class="folder-view-sections folder-card-view" style="display: none;">
                  <div class="project-package"><div id="folderCardView" class="art-wrapper d-flex align-items-center"></div></div>
                  </div>
              </div>`);

          div.find('.accordion').append(row); // Append row inside accordion div

          //const div = row.find('#folderCardView');
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
               row.find('#folderCardView').append(projectCardHtml);
           });
          
          const tbody = row.find('#job-table-body'); // Access the table body of this specific row

          // Create and append table rows for each job
          jobData.forEach(job => {
              const membersHtml = job.members.map(member => `<li><img src="${member.membersnumber}"></li>`).join('');
              const tr = $(`
                  <tr>
                      <td class="job-image"><img src="${job.productImg}"></td>
                      <td class="job-data">${job.jobNumber}</td>
                      <td class="job-description-data">
                          <span class="info-icon" data-jobid="${job.id}">${job.jobName}</span>                         
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

              tbody.append(tr); // Append the table row to tbody
          });
      });

      div.append('</div>'); // Close the accordion div
  }

  appendFolderRows(folderData);
});
