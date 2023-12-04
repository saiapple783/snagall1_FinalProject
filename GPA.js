var $ = function (id) {
	return document.getElementById(id);
};

var calCreditHours = 0;
var calGradePoints = 0;

function totalGPA() {

	var courseH1 = parseInt(document.getElementById('course1').value);
  	var gradeOne = document.getElementById('grade1').value.toUpperCase();

  	var courseH2 = parseInt(document.getElementById('course2').value);
  	var gradeTwo = document.getElementById('grade2').value.toUpperCase();

  	var courseH3 = parseInt(document.getElementById('course3').value);
  	var gradeThree = document.getElementById('grade3').value.toUpperCase();

  	var courseH4 = parseInt(document.getElementById('course4').value);
  	var gradeFour = document.getElementById('grade4').value.toUpperCase();

  	var courseH5 = parseInt(document.getElementById('course5').value);
  	var gradeFive = document.getElementById('grade5').value.toUpperCase();

  	if (isNaN(courseH1) || isNaN(courseH2) || isNaN(courseH3) || courseH1 < 1 || courseH1 > 5 || courseH2 < 1 || courseH2 > 5|| courseH3 < 1 || courseH3 > 5 ||  !/^[A-Da-dFf]$/.test(gradeOne) || !/^[A-Da-dFf]$/.test(gradeTwo) ||	!/^[A-Da-dFf]$/.test(gradeThree)) {
		alert('Provide valid values for a minimum of three courses, including credit hours ranging from 1 to 4 and letter grades of A, B, C, D, or F.');
		return;
	}

	if(isNaN(courseH4)==false && isNaN(courseH5)==false)
	{
		if (courseH4 < 1 || courseH4 > 5 || courseH5 < 1 || courseH5 > 5 ||  !/^[A-Da-dFf]$/.test(gradeFour) || !/^[A-Da-dFf]$/.test(gradeFour)) {
			alert('Provide valid values for the courses 3 and 4, with credit hours ranging from 1 to 4 and letter grades of A, B, C, D, or F');
			return;
		}

		calCreditHours = courseH1 + courseH2 + courseH3 + courseH4+ courseH5;
		calGradePoints = calPoints(gradeOne) * courseH1 +
		calPoints(gradeTwo) * courseH2 +
		calPoints(gradeThree) * courseH3 +
		calPoints(gradeFour) * courseH4 +
		calPoints(gradeFive) * courseH5;
	}

	if(isNaN(courseH4) && isNaN(courseH5))
	{
		calCreditHours = courseH1 + courseH2 + courseH3;
		calGradePoints = calPoints(gradeOne) * courseH1 +
		calPoints(gradeTwo) * courseH2 +
		calPoints(gradeThree) * courseH3;
	}

	if(isNaN(courseH4)==false && isNaN(courseH5))
	{
		if (courseH4 < 1 || courseH4 > 5 ||  !/^[A-Da-dFf]$/.test(gradeFour)) {
			alert('Please enter valid values (credit hours between 1 and 4, letter grade A, B, C, D, or F) for a minimum of three courses.');
			return;
		}
	
		calCreditHours = courseH1 + courseH2 + courseH3+ courseH4;
		calGradePoints = calPoints(gradeOne) * courseH1 +
		calPoints(gradeTwo) * courseH2 +
		calPoints(gradeThree) * courseH3 +
		calPoints(gradeFour) * courseH4;
	}

	const gpa = (calGradePoints / calCreditHours).toFixed(2);

	const resultDiv = document.getElementById('avggpa');
	resultDiv.value = gpa;
}

function calPoints(letterGrade)
{
    switch (letterGrade) {
		case 'A': return 4.0;
		case 'B': return 3.0;
		case 'C': return 2.0;
		case 'D': return 1.0;
		case 'F': return 0.0;
		default: return 0.0;
	}
}

function resetData() {
	document.getElementById('course1').value = '';
	document.getElementById('grade1').value = '';
	document.getElementById('course2').value = '';
	document.getElementById('grade2').value = '';
	document.getElementById('course3').value = '';
	document.getElementById('grade3').value = '';
	document.getElementById('course4').value = '';
	document.getElementById('grade4').value = '';
	document.getElementById('course5').value = '';
	document.getElementById('grade5').value = '';
	document.getElementById('avggpa').value = '';
};

window.onload=function(){
	$("reset").onclick = resetData;
	$("submit").onclick = totalGPA;
};