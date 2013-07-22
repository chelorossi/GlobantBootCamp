
var mikhail = Object.create(null);
Object.defineProperty(mikhail, 'name', { value:        'Mikhail'
                                       , writable:     true
                                       , configurable: true
                                       , enumerable:   true });


Object.defineProperty(mikhail, 'age', { value:        19
                                      , writable:     true
                                      , configurable: true
                                      , enumerable:   true })

Object.defineProperty(mikhail, 'gender', { value:        'Male'
                                         , writable:     true
                                         , configurable: true
                                         , enumerable:   true })


Object.defineProperties(mikhail, { name:   { value:        'Mikhail'
                                           , writable:     true
                                           , configurable: true
                                           , enumerable:   true }

                                 , age:    { value:        19
                                           , writable:     true
                                           , configurable: true
                                           , enumerable:   true }

                                 , gender: { value:        'Male'
                                           , writable:     true
                                           , configurable: true
                                           , enumerable:   true }});


Object.getOwnPropertyNames(mikhail);
Object.keys(mikhail);


function add(other, yet_another) {
    return this.value + other + (yet_another || 0)
}

var one = { value: 1, add: add }



git init
 git add .
 git status
 git remote -v
 git commit -m "Initial commit"
 git pull GlobantBootCamp master
git push GlobantBootCamp master
C:\Users\marcelo.rossi\Documents\GitHub\GlobantBootCamp [master]> git remote add GlobantBootCamp https://github.com/chel
uskis/GlobantBootCamp.git