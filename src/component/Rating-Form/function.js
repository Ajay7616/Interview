async function lateResponder(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`I am responding after ${delay} seconds`);
            resolve();
        }, delay * 1000);
    });
}

(async function executeConcurrentResponses() {
    const delays = [3, 7, 5];

    await Promise.all(delays.map(delay => lateResponder(delay)));

    console.log("Sab kaam done");
})();
