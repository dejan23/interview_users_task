const Users = require('../models/Users');

// Users - GET
exports.fetchUsers = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
        const perPage = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;
        const sort = typeof (req.query.sort) == 'string' ?  req.query.sort : ''
        const search = typeof (req.query.search) == 'string' ? req.query.search : ''

        let sortBy = {};
        const searchObj = {
            $regex: search,
            $options: 'i',
        }

        const findBy = search ? { $or: [{ name: searchObj }, { email: searchObj }] } : {}

        sort.split(',').forEach(element => {
            if (element === "email" || element === "name") {
                sortBy = {
                    ...sortBy,
                    [element]: 1
                }
            }
        });

        let query = Users.find(findBy)
            .skip(perPage * (page - 1))
            .limit(perPage)

        if (Object.keys(sortBy).length !== 0)
            query = query.sort(sortBy);

        const users = await query.exec();
        res.json(users)

    } catch (err) {
        next(err)
    }
}
