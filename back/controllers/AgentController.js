import prisma from"../config/prisma.js";

const getAgents = (req,res) => {
  res.send(["Phoenix ","Viper","Sage", "Cypher","Reyna" ,"Jett"]);
};
const getAgent = async (req, res) => {
  const id = req.params.id;
  // const id = "1"
  // const id = 1
  try {
    const agent = await prisma.agent.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (agent === null) {
      return res.status(404).send("Agent not found");
    }
    //l'action ne se deroulera pas ici//
    return res.send(agent);
  } catch (error) {
    // mais là  //
    return res.status(500).send(error.message);
  }
};

const createAgent = (req, res) => {
  let agent = req.body;
  console.log(agent);

  prisma.agent
    .create({
      data: {
        name: agent.name,
      },
    })

    .then((agents) => {
      res.json(agents);
    })

    .catch((error) => {
      res.json(error);
    });
};

const updateAgent = (req, res) => {
  let id = Number(req.params.id);
  let agent = req.body;

  prisma.agent
    .update({
      where: {
        id: id,
      },
      data: {
        name: agent.name,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};

const deleteAgent = (req, res) => {
  let id = Number(req.params.id);

  prisma.agent
    .delete({
      where: {
        id: id,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};

export { getAgents, getAgent, createAgent, updateAgent, deleteAgent };
