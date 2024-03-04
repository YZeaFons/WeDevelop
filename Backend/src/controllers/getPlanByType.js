const { findPlanByType } = require("../services/planServices")

const getPlanByType = async (req, res) => {
    try {
        const { type } = req.query
        const searchPlan = await findPlanByType(type)
        res.status(200).json(searchPlan)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getPlanByType