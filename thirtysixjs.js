const bicycle = {
    bell: function() {
        return "Ring ,ring! Watch out, please!"

    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

response1 = bicycle.bell();
console.log(response1);  

// output: Ring ,ring! Watch out, please!


response2 = door.bell();
console.log(response2);

// output: Ring, ring! Come here, please!