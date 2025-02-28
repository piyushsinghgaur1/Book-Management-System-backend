import { Request, Response, NextFunction } from "express";
export const addData = async (
  req: Request,
  res: Response,
  next: NextFunction,
  Model: any,
  requiredFields: string[],
  dataName: string
): Promise<any> => {
  try {
    const data = req.body;
    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({ message: `Field ${field} is required.` });
      }
    }
    const newData = await Model.create(data);
    return res.status(201).json({
      status: 201,
      data: newData,
      message: `${dataName} added successfully`,
    });
  } catch (error) {
    console.error(`Error while adding ${dataName.toLowerCase()}:`, error);
    next(error);
  }
};
