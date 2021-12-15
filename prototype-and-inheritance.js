const animal = {
    move: function() {
        console.log('moving')
    }
}

cat = {}


cat.__proto__ = animal
cat.move()