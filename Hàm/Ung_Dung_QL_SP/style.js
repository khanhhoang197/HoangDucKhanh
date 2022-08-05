const jobs = ["Lau nhà", "Giặt áo quần", "Nấu cơm", "Đón con", "Rửa chén"];
const enterKey = 13;
function renderJobs(){
    let htmls = "";
    for(let i = 0; i < jobs.length; i++){
        htmls += `
                    <tr id="tr_${i}">
                        <td>${i+1}</td>
                        <td>${jobs[i]}</td>
                        <td>
                            <button id="btnEdit_${i}" onclick="editJob(${i})" class="btn btn-warning">Edit</button>
                            <button id="btnSave_${i}" onclick="saveJob(${i})" class="btn btn-primary d-none">Save</button>
                            <button id="btnCancel_${i}" onclick="reset(${i})" class="btn btn-warning d-none">Cancel</button>
                            <button onclick="removeJob(${i})" class="btn btn-danger">Remove</button>
                        </td>
                    </tr>
                `;
        // htmls += "<tr><td>"+ (i + 1) +"</td><td>"+(jobs[i])+"</td><td><button class='btn btn-warning'>Edit</button><button class='btn btn-danger'>Remove</button></td></tr>"
    }
    document.querySelector('.tbJob>tbody').innerHTML = htmls;
    // jobs.forEach(function(job, index){
    //         htmls += `
    //                 <tr>
    //                     <td>${index+1}</td>
    //                     <td>${job}</td>
    //                     <td>
    //                         <button class="btn btn-warning">Edit</button>
    //                         <button class="btn btn-danger">Remove</button>
    //                     </td>
    //                 </tr>
    //             `;
    // })
    //  let htmls = jobs.map(function(job, index){
    //     return `
    //             <tr>
    //                 <td>${index+1}</td>
    //                 <td>${job}</td>
    //                 <td>
    //                     <button class="btn btn-warning">Edit</button>
    //                     <button class="btn btn-danger">Remove</button>
    //                 </td>
    //             </tr>
    //             `
    // })
    // document.querySelector('.tbJob>tbody').innerHTML = htmls.join("");
}

function addJob(){
    let jobName = document.querySelector("#jobName").value;
    if(jobName == null || jobName ==''){
        alert("Jobname is required!");
        return;
    }
    jobs.push(jobName);
    renderJobs();
    document.querySelector("#jobName").value = null;
}

function removeJob(index){
    let confirmed = window.confirm("Are you sure to remove this job?");
    if(confirmed){
        jobs.splice(index, 1);
        renderJobs();
    }
}

function editJob(index){
    let tr = document.querySelector(`#tr_${index}`);
    let oldJobname = jobs[index];
    tr.children[1].innerHTML = `<input onfocus="this.select();" id="jobname_${index}" class="form-control" type="text" value="${oldJobname}">`;
    document.querySelector(`#jobname_${index}`).focus();
    document.querySelector(`#btnEdit_${index}`).classList.add('d-none');
    document.querySelector(`#btnSave_${index}`).classList.remove('d-none');
    document.querySelector(`#btnCancel_${index}`).classList.remove('d-none');
}

function reset(index){
    let tr = document.querySelector(`#tr_${index}`);
    let oldJobname = jobs[index];
    tr.children[1].innerHTML = oldJobname;
    document.querySelector(`#btnEdit_${index}`).classList.remove('d-none');
    document.querySelector(`#btnSave_${index}`).classList.add('d-none');
    document.querySelector(`#btnCancel_${index}`).classList.add('d-none');
}

function saveJob(index){
    let newJobname = document.querySelector(`#jobname_${index}`).value;
    if(newJobname == null || newJobname == ''){
        alert('Jobname is required!')
        return;
    }
    jobs[index] = newJobname;
    reset(index);
}

function pressEnter(e){
    if(e.keyCode == enterKey){
        addJob();
    }
}
function main(){
    renderJobs();
}

main();