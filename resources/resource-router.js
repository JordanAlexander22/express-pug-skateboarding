const express = require("express");
const Resources = require("./resource-model");

const router = express.Router();

//list of all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resources.findResources();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: "Resources could not be retrieved." });
  }
});

//get resource by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const resource = await Resources.findById(id);
    if (!resource) return res.status(404).json(`resource could not be found`);
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: "Trick could not be retrieved." });
  }
});

// add a resource
router.post("/", async (req, res) => {
  const resourceData = req.body;

  if (!req.body)
    return res.status(400).json({
      errorMessage: "Please provide needed info"
    });
  try {
    const count = await Resources.add(resourceData);
    res.status(201).json(count);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new resource" });
  }
});

module.exports = router;
