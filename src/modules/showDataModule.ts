import { Request, Response, NextFunction } from "express";
import config from "../config/config";
const {
  PAGE_CONFIG: { ITEMS_PER_PAGE },
} = config;

export const showData = async (
  req: Request,
  res: Response,
  next: NextFunction,
  data: any,
  dataName: string
): Promise<any> => {
  try {
    const page = Number(req.params.pageNumber);
    const limit = ITEMS_PER_PAGE || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // const data = await dataModel.findAll();
    const paginatedData = data.slice(startIndex, endIndex);

    if (paginatedData.length === 0) {
      return res.status(404).json({
        status: 404,
        message: `Only ${Math.ceil(
          data.length / limit
        )} page(s) available. You are fetching for page ${page}`,
      });
    }

    return res.status(200).json({
      status: 200,
      data: paginatedData,
      message: `${dataName} fetched for page ${page}. Total of ${Math.ceil(
        data.length / limit
      )} pages.`,
    });
  } catch (error) {
    next(error);
  }
};
