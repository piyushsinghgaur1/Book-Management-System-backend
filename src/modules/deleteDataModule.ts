import { Request, Response, NextFunction } from "express";

export const deleteData = async (
  req: Request,
  res: Response,
  next: NextFunction,
  Model: any,
  dataName: string
): Promise<any> => {
  const idField = `${dataName.toLowerCase()}Id`;
  const dataId = req.params[idField];

  if (!dataId) {
    return res.status(400).json({ message: `${idField} is required.` });
  }

  try {
    const data = await Model.findOne({ where: { [idField]: dataId } });
    if (!data) {
      return res.status(404).json({ message: `${dataName} not found` });
    }

    await Model.destroy({ where: { [idField]: dataId } });
    return res.status(200).json({
      status: 200,
      data: data,
      message: `${dataName} deleted successfully`,
    });
  } catch (error) {
    console.error(`Error while deleting ${dataName.toLowerCase()}:`, error);
    next(error);
  }
};
