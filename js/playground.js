const playground = document.getElementById("playground")

const addElements = () => { 
    let photoGallery = [
    {
        name: "img1",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJkIbVEqcKTrjq9j3JTK2RPEDDZYfATk7vA&usqp=CAU", 
    }, 
    {
        name: "img2",
        imgURL: "https://images.pexels.com/photos/5233320/pexels-photo-5233320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    }]


    let newDiv = document.createElement("div");

    let newImg = document.createElement("img");
    newImg.src = photoGallery[0]["imgURL"];

    const newContent = document.createTextNode("hello");
    newDiv.append(newContent);

    playground.appendChild(newDiv);
    playground.appendChild(newImg);
}

addElements();

console.log(playground)


/*
/// GOALS:
/// - create a loop that goes through each photo in phot gallery and adds element for each image
*/