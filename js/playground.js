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
    },
    {
        name: "img3",
        imgURL: "https://images.pexels.com/photos/12705772/pexels-photo-12705772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        name: "img4",
        imgURL: "https://images.pexels.com/photos/12747521/pexels-photo-12747521.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }]


    //for every image in photoGallery
    for (let index = 0; index < photoGallery.length; index++){
        // create a new img element
        let newImg = document.createElement("img");
        // for that image element add the image url of current photo index to src
        newImg.src = photoGallery[index]["imgURL"];
    
        // add that photo to the gallery
        playground.appendChild(newImg);
    }
    
    let newDiv = document.createElement("div");
    const newContent = document.createTextNode("hello");
    newDiv.append(newContent);
    playground.appendChild(newDiv);

    
}

addElements();

console.log(playground)


/*
/// GOALS:
/// - create a loop that goes through each photo in phot gallery and adds element for each image
*/