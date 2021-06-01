console.log("draft");
const promise = new Promise((resolve, reject) => {
  const a = 10;
  if (a >= 10) {
    resolve("success");
  }
  reject("reject");
});

const success = (e) => {
  console.log(e);
};

promise.then(success, (reject) => {
  console.log(reject);
});
