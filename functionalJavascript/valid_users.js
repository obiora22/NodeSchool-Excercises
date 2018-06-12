var goodUsers = [
     { id: 1 },
     { id: 2 },
     { id: 3 }
   ]
function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      console.log(submittedUser)
      return goodUsers.some(function (goodUser) {
        if (submittedUser) return goodUser.id === submittedUser.id;

      });
    });
  }
}

module.exports = checkUsersValid
