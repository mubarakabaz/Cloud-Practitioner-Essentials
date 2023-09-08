console.log("Pyramid of doom!!")

function openDatabase(odb) {
    getCollection(odb, 'users', function(col){
        find(col, {user.class: 'new'}, function(result){
            result.filter(function(user){
                if(user.age > isDeadInTheWorld){
                    return user;
                }
                return null
            })
        })
    })
}

