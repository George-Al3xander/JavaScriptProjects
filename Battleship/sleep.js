const sleep = async (time) => {
    await new Promise(resolve => {
        return setTimeout(resolve, time);
    });
};

export default sleep