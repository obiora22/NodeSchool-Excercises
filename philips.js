var data = [
  {"rad_exam": 0, "modality": "CT", "exam_duration": 34},
  {"rad_exam": 0, "modality": "CT", "exam_duration": 100},
  {"rad_exam": 1, "modality": "MT", "exam_duration": 4},
  {"rad_exam": 1, "modality": "MT", "exam_duration": 20},
  {"rad_exam": 0, "modality": "MR", "exam_duration": 14}
]
var new_schema = {};

data.forEach((obj1, i, arr) => {
  data.forEach((obj2, k, arr) => {
    if (i !== k) {
      if (obj1.modality === obj2.modality) {
        new_schema[obj1.modality] = obj1.exam_duration + obj2.exam_duration;
      }
    }
  })
})

console.log(JSON.stringify(new_schema));

// var schema = [];

// for (let i in data) {
//   console.log(data[i]);
// }

// for (prop in data) {
//   schema.push({label: data[prop].modality, value: data[prop].exam_duration})
// }

// var result = schema.map((obj) => JSON.stringify(obj));

// console.log(schema);

// var final_obj = {}
// for (var i = 0; i < schema.length; i++) {
//  console.log(schema[i].label);
//  for (var k = 0; k < schema.length; k++) {
//    if (i !== k) {
//     if (schema[i].label === schema[k].label) {
//       final_obj[schema[i].label] = schema[i].value + schema[k].value;
//     }
//    }
   
//  }
// }
// console.log((final_obj));

