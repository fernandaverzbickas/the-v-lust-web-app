import validator from 'validator'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, type)  => {
    let isValid = true
    if (type === 'email') {
        isValid = validator.isEmail(value) && isValid
    }
    if (type === 'text') {
        isValid = validator.isByteLength(value ,{min:2, max: 20}) && isValid
    }
    if (type === 'url') {
        isValid = validator.isURL(value) && isValid
    } 

    if (type === 'file' && value !== '') {
        const check = (value) => {
            var ext = value.match(/\.([^\.]+)$/)[1];
            switch (ext) {
            case 'jpg':
            case 'jpeg':
            case 'bmp':
            case 'png':
            case 'tif':
                return true
            default:
                return false
            }
        }
        isValid = check(value) && isValid
    }
          
    return isValid
    }
