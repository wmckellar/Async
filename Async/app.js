setTimeout (function mine (message) {
    alert("hello");
}, 2000);

setTimeout (function getWords () {
    console.log("hello");
    console.log(("hi"), 2000);
    console.log(("howdie"), 3000);
    console.log(("final"), 1000)
});

function done() {
    console.log("Job's done.")
}

done();

function countdown(num, CallBack) {
    setTimeout(function () {

        if (num > 0) {
            console.log(num);
            countdown(num - 1, CallBack);
        }
        else {
            CallBack ();
        }
        }, 1000
            );
}

function isDone () {
    console.log( "Everything is done!");
}

countdown (5, isDone);

let lunchTime = false;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let meal = { lunch: "pizza", drink: "root beer" };
            resolve(console.log(meal));
        }
        else {
            Promise.reject().catch(function () {
                err = "No soup for you!"
                throw new Error(err)
            })
        }
    });
};

orderMeSomeFood();
