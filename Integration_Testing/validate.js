export const ValidateStringNotEmpty = (num) => {
    if(num.trim().length === 0) {
        throw new Error('Input cant not be empty')
    }
}

export const validateNumber = (num) => {
    if(isNaN(num)) {
        throw new Error('Invalid number input')
    }
}