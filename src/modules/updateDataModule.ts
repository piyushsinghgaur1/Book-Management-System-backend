import { Request, Response, NextFunction } from "express";

export const updateData = async (
  req: Request,
  res: Response,
  next: NextFunction,
  Model: any,
  requiredFields: string[],
  dataName: string
): Promise<any> => {
  const idField = `${dataName.toLowerCase()}Id`;
  const id = req.params[idField];
  if (!id) {
    return res.status(400).json({ message: `${dataName}Id is required.` });
  }

  const updateFields = req.body;
  const fieldsToUpdate = [];

  try {
    const data = await Model.findOne({ where: { [idField]: id } });
    if (!data) {
      return res.status(404).json({ message: `${dataName} not found` });
    }

    for (const field of requiredFields) {
      if (
        updateFields[field] &&
        data.dataValues[field] !== updateFields[field]
      ) {
        fieldsToUpdate.push(field);
      }
    }

    if (fieldsToUpdate.length > 0) {
      await Model.update(updateFields, {
        where: { [idField]: id },
        returning: true,
      });
    }

    return res.status(200).json({
      status: 200,
      data: await Model.findOne({ where: { [idField]: id } }),
      message:
        fieldsToUpdate.length > 0
          ? `${fieldsToUpdate.join(", ")} updated successfully`
          : "No Field Updated",
    });
  } catch (error) {
    console.error(`Error while updating ${dataName.toLowerCase()}:`, error);
    next(error);
  }
};
