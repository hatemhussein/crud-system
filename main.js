//get input values bu holding the HTML tags

var courseName = document.getElementById('courseName');
var courseCategory = document.getElementById('courseCategory');
var coursePrice = document.getElementById('coursePrice');
var courseDescription = document.getElementById('courseDescription');
var courseCapacity = document.getElementById('courseCapacity');
var addBtn = document.getElementById('click');
var data = document.getElementById('data');
var deleteBtn = document.getElementById('deleteBtn');
var search = document.getElementById('search');

var courses = [];

addBtn.onclick = function(event){


    event.preventDefault();
    
    var course = {
        courseName: courseName.value,
        courseCategory: courseCategory.value,
        coursePrice: coursePrice.value,
        courseDescription: courseDescription.value,
        courseCapacity: courseCapacity.value

    }

    courses.push(course);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course has been added successfully',
        showConfirmButton: false,
        timer: 1500
      })
    clearInputs();
    displayData();
}

//clearing inputs after adding function

function clearInputs(){

    courseName.value = '';
    courseCapacity.value = '';
    courseCategory.value = '';
    courseDescription.value = '';
    coursePrice.value = '';
}

console.log(courses)

//Display the data on table

function displayData(){
    var res = '';
    for(var i=0;i<courses.length;i++){
        res+=`
        <tr>
        <td>${i+1}</td>
        <td>${courses[i].courseName}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
        <td>${courses[i].courseDescription}</td>
        <td>${courses[i].courseCapacity}</td>
        <td><button class="btn btn-danger" onclick="deleteCourse(${i})">Delete</button></td>
        <td><button class="btn btn-info">Update</button></td>

        </tr>
        `

    }

    data.innerHTML = res;

}

//deleting the course function

function deleteCourse(index){

    

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(index,1);
            displayData();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

//deleting all the data

deleteBtn.onclick = function(){
    courses = [];
    data.innerHTML='';

}

//searching by onkeypress

search.onkeyup = function(){

    var res = '';
    for(var i=0;i<courses.length;i++){
        if(courses[i].courseName.toLowerCase().includes(search.value.toLowerCase())){
            res+=`
        <tr>
        <td>${i+1}</td>
        <td>${courses[i].courseName}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
        <td>${courses[i].courseDescription}</td>
        <td>${courses[i].courseCapacity}</td>
        <td><button class="btn btn-danger" onclick="deleteCourse(${i})">Delete</button></td>
        <td><button class="btn btn-info">Update</button></td>

        </tr>
        `

        }
        

    }

    data.innerHTML = res;

}
