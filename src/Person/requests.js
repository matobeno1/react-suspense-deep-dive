const fetchPerson = () => {
    return fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(response => response.results[0])
}

const wrapPromise = (promise) => {
    let status = "pending";
    let result = null;
    const suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    )

    return {
        read: () => {
            if (status === "pending") {
                throw suspender
            } else if (status === "error") {
                throw result;
            }
            return result;
        }
    }
}

export const createResource = () => {
    return {
        person: wrapPromise(fetchPerson())
    }
}
