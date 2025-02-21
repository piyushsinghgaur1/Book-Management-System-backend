import { Request, Response } from "express";

export const deleteData = async (
  req: Request,
  res: Response,
  dataModel: any
): Promise<any> => {
  const dataId = req.params.id;

  if (!dataId) {
    return res
      .status(400)
      .json({ message: `${dataModel.name} ID is required.` });
  }

  try {
    const dataToDelete = await dataModel.findOne({ where: { id: dataId } });
    if (!dataToDelete) {
      return res.status(404).json({ message: `${dataModel.name} not found` });
    } else {
      await dataModel.destroy({ where: { id: dataId } });
      return res.status(200).json({
        status: 200,
        data: dataToDelete,
        message: `${dataModel.name} deleted successfully`,
      });
    }
  } catch (error) {
    console.error(`Error while deleting ${dataModel.name}:`, error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
