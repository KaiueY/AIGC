/**
 * 这是一个手写的Promise
 * @author Raphael kai
 * @date 2024-12-22
 */

class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFullfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;

                this.onFullfilledCallbacks.forEach((callback) => callback(value));
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;

                this.onRejectedCallbacks.forEach((callback) => callback(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                    throw reason;
                };
        return new MyPromise((resolve, reject) => {
            if (this.state === "fulfilled") {
                try {
                    setTimeout(() => {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    });
                } catch (error) {
                    reject(error);
                }
            }
            if (this.state === "rejected") {
                try {
                    setTimeout(() => {
                        const result = onRejected(this.reason);
                        resolve(result);
                    });
                } catch (error) {
                    reject(error);
                }
            }
            if (this.state === "pending") {
                this.onFullfilledCallbacks.push((value) => {
                    try {
                        setTimeout(() => {
                            const result = onFulfilled(this.value);
                            resolve(result);
                        });
                    } catch (error) {
                        reject(error);
                    }
                });
                this.onRejectedCallbacks.push((value) => {
                    try {
                        setTimeout(() => {
                            const result = onRejected(this.value);
                            resolve(result);
                        });
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        });
    }
}

const promise = new MyPromise((resolve, reject) => {
    console.log("promise start");

    resolve("success");
});
 promise.then((value) => {
    console.log(value);
    return "success2";
}).then((res) => {
    console.log(res);
});