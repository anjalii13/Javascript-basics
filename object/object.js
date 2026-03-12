//  Assignment-1
 const student ={
    name: "Anjali shinde",
    age :22,
    grade:"A"
}
console.log(student)
 
student.subject="Maths"
console.log(student  ,"After adding subject property:")

student.grade="B"
console.log(student,"After updating grade")

delete student.age
console.log(student , "After deleting the age property")

// Assignment-2
 
const book={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    details:{
        pages:300,
        genre:"Novel"
    }
}
console.log(book)
console.log(book.details.pages , "Accesing nested property")
book.details.pages=400
console.log(book , "After updating nested property")

// Assignment-3
const product={
    name:"Laptop",
    price:70000,
    stock:50
}
for(let key in product){
    console.log(key,product[key])
}

