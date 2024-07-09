name_of_the_flavor_array = [];

function submit()
{
    var flavor_1 = document.getElementById("name_of_the_flavor_1").value;
    var flavor_2 = document.getElementById("name_of_the_flavor_2").value;
    var flavor_3 = document.getElementById("name_of_the_flavor_3").value;
    var flavor_4 = document.getElementById("name_of_the_flavor_4").value;

    name_of_the_flavor_array.push(flavor_1);
    name_of_the_flavor_array.push(flavor_2);
    name_of_the_flavor_array.push(flavor_3);
    name_of_the_flavor_array.push(flavor_4);

    console.log(name_of_the_flavor_array);

    document.getElementById("display_name").innerHTML = name_of_the_flavor_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_the_flavor_array.sort();
    console.log(name_of_the_flavor_array);
    document.getElementById("display_name").innerHTML = name_of_the_flavor_array;
}