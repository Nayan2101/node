const Role = require("../model/Role");

module.exports = {
  getAllRole: async (req, res) => {
    const roleData = await Role.find();
    res.status(200).json({ roleData });
  },

  getById: async (req, res) => {
    const roleId = req.params.id;
    const roleData = await Role.findById({ _id: roleId });
    res.status(201).json({ roleData: roleData });
  },

  addRole: async (req, res) => {
    const { name } = req.body;
    const newRoleData = new Role({ name: name });
    const roleData = await newRoleData.save();
    res.status(201).json({ roleData });
  },

  updateRole: async (req, res) => {
    const roleId = req.params.id;
    const { name } = req.body;
    const newRoleData = { name: name };
    const roleData = await Role.findOneAndUpdate({ _id: roleId }, newRoleData, {
      new: true,
    });
    res.status(201).json({ roleData });
  },

  delete: async (req, res) => {
    const roleId = req.params.id;
    const roleData = await Role.deleteOne({ _id: roleId });
    res.status(201).json({ deletedCount: roleData.deletedCount });
  },
};
