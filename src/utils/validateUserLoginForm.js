export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username cannot be blank';
    } else if (values.username.length < 6 || values.username.length > 15) {
        errors.username = 'Username must be between 6 and 15 characters in length'
    };

    if (!values.password) {
        errors.password = 'Password cannot be blank';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters in length'
    };

    return errors;
};
