function validator(linksToComplete){

    const validateArray = linksToComplete.map(link => {
        link.status = "prueba";
        link.ok = "ok";

        return link;
    });
    return validateArray;
}

module.exports = validator;