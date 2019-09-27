const fs = require("fs");
const { promisify } = require("util");

const step1 = () =>{
    fs.readFile("./step1.txt", "utf8", (err, data) => {
        console.log(data);
    });
};

const step2 = () => console.log("step 2");

const step3 = () => {
    return new Promise((resolve, reject) =>  {
        fs.readFile("./step3.txt", "utf8", (err, contents) => {
            if(err) return reject(err);
            resolve(console.log(contents));
    });
});
};

const step4 = () => console.log("step 4");

const step5 = () => {
    fs.readFile("./step5.txt", "utf8", (err, data) => {
        console.log(data);
    });
};

const promiseExample = () => {
    const readFile = promisify(fs.readFile);
    return readFile("./step1.txt", "utf8");
};

const step1andstep2 = () => {
    const readFile = promisify(fs.readFile);
    readFile("./step1.txt", "utf8").then(data => {
        console.log(data);
        step2();
    });
}

const step1Tostep4 = async () => {
    step1andstep2();
    await step3();
    await step4();
}

step1Tostep4()
