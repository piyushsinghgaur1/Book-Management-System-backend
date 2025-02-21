import { Request, Response } from "express";

export const showData = async (
  req: Request,
  res: Response,
  data: any,
  dataName: string
): Promise<any> => {
  try {
    const page = Number(req.params.pageNumber);
    const limit = parseInt(process.env.BOOKS_LIMIT || "10", 10);
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
    console.error("Error reading data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
