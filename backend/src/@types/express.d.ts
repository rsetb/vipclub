declare namespace Express {
  export interface Request {
    user: { id: string; profile: string; companyId: number };
    id: string;
    rawBody?: Buffer;
  }

  namespace Multer {
    interface File {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      size: number;
      destination: string;
      filename: string;
      path: string;
      buffer: Buffer;
    }
  }
}
