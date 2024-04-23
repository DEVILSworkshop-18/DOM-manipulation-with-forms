let button = document.getElementById("submit");
button.addEventListener("click",tables);


function tables()
{
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let female_rad = document.getElementById("Female");
    let male_rad = document.getElementById("male");


    let genders;
    if (female_rad.checked){        
        genders = "Female";
    }
    else if(male_rad.checked) {
                 genders ="Male";
            } 
    else{
        alert("fill the gender")
    }
    let food = document.getElementsByClassName("food");
    let checkedValues =[];
    for(i=0;i<food.length;i++)
    {
        if(food[i].checked)
        {
            checkedValues.push(food[i].value);
        }
    }
    checkedValues = checkedValues.join(",");

    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;


    // Get table and creating the new rows
    let table= document.getElementById("list_table").getElementsByTagName("tbody")[0];
    let row = table.insertRow();
    let col1 = row.insertCell(0)
    let col2 = row.insertCell(1)
    let col3 = row.insertCell(2)
    let col4 = row.insertCell(3)
    let col5 = row.insertCell(4)
    let col6 = row.insertCell(5)
    let col7 = row.insertCell(6)
    let col8 = row.insertCell(7)



    // Setting values in the cells
    col1.innerText = first_name;
    col2.innerText = last_name;
    col3.innerText = address;
    col4.innerText = pincode;
    col5.innerText = genders;
    col6.innerText = checkedValues;
    col7.innerText = state;
    col8.innerText = country;

     // Clear the form field after submittion
     document.getElementById("form").reset();
}