function validUsers(good_users) {
  return function(supplied_users) {
    return supplied_users.every(function(supplied_user) {
      return good_users.some(function(good_user) {
        if (supplied_user) supplied_user.id === good_user.id
      })
    })
  }
}

var goodUsers = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
];

var suppliedUsers = [
  {id: 2},
  {id: 3}
];

function checkUsersValid(goodUsers) {
  return function(suppliedUsers) {
    var result = [];
    goodUsers.forEach(function(goodUser) {

      for (var i = 0; i < suppliedUsers.length; i++) {

         if (goodUser.id === suppliedUsers[i].id) {
           result.push(suppliedUsers[i])
         }
      }

    })
    return result.length === suppliedUsers.length ? true : false;
  }
}
console.log(checkUsersValid(goodUsers)(suppliedUsers));


[1,2,3,4].filter(function(num,index) {
  return num > 1
})
