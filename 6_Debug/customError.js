class CustomError extends Error {
    constructor({message, type}) {
        super(message);
        this.type = type;
    }
}

const myError = new CustomError({
    message: "My custom error",
    type: "Server"
});

try {
    throw myError;
} catch(err) {
    if (err.type === "Server") {
        console.log("Server error now!!")
    }
}

