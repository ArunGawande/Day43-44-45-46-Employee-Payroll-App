window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

	const createInnerHtml = () => {
		const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
		                    "<th>Salary</th><th>Start Date</th><th>Actions</th>"
	let empPayrollData = createEmployeePayrollJSON()[0];
	let innerHTML = `${headerHtml}`;
	let empPayrollList = createEmployeePayrollJSON();
	for (const empPayrollData of empPayrollList) {
		innerHTML = `${innerHTML}
		<tr>
					<td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
					<td>${empPayrollData._name}</td>
					<td>${empPayrollData._gender}</td>
					<td><div class='Dept-label'>${empPayrollData._deptartment}</div></td>
					<td>${empPayrollData._salary}</td>
					<td>${empPayrollData._startDate}</td>
					<td>
						<img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assests/icons/delete-black-18dp.svg">
						<img name="${empPayrollData._id}" alt="edit" onclick="upgate(this)" src="../assests/icons/create-black-18dp.svg">
					</td> 
				</tr>`;

	}
	document.querySelector('#table-display').innerHTML = innerHTML;
	};
	
	const createEmployeePayrollJSON = () => {
		let empPayrollListLocal = [
			{
				_name: 'Arun Gawande',
				_gender: 'Male',
				_deptartment: 'HR',
				_salary: '45000',
				_startDate: '03 March 2019',
				_note: ' ',
				_id: new Date().getTime(),
				_profilePic: '../assests/profile-images/Ellipse-9.png'
			},
			{
				_name: 'Prajakta bramhe',
				_gender: 'Female',
				_deptartment: 'Marketing',
				_salary: '100000',
				_startDate: '2 May 2020',
				_note: ' ',
				_id: new Date().getTime() + 1,
				_profilePic: '../assests/profile-images/Ellipse-1.png'
			}
		];
    return empPayrollListLocal;
		}