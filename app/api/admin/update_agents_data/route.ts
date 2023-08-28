import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@util/database";
import Agent from "@models/agent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const { agentId, newRole } = req.body;

    const updatedAgent = await Agent.findByIdAndUpdate(
      agentId,
      { role: newRole },
      { new: true }
    );

    if (!updatedAgent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    return res
      .status(200)
      .json({
        message: "Agent role updated successfully",
        agent: updatedAgent,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
