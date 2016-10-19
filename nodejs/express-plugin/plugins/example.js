'use strict';

module.exports = () => {
    return (req, res, next) => {
        console.log('app.use(example())');
        next();
    };
};
