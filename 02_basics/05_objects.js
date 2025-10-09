const course={
    courseName:"js",
    price:"1000",
    course_teacher:"Hitesh"
}
// to get courseName we write course.courseName too big to write it each and every time
const{courseName}=course
// jise hum extact krna chahte hai usse hum { } mei rkhenge equal to mei object ka kaam
// const{price}=course
// const{course_teacher}=course

// ab hum yha pe naam bhi change ya chota kr skte h
 const{courseName: c_name}=course
//  console.group(c_name)

// json
// {
//     "name":"hitesh",
//     "course_name" :"js",
//     "price" :"free"
// }
// json is not an object,object has a name
// json ki keys and value dono braces mei hoti h


[
    {},
    {},
    {}
]

