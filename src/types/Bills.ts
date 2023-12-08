// I had to cut corners creating all the properties in these types because of time

export enum BillType {
  Public = "Public",
  Private = "Private",
  Hybrid = "Hybrid",
}

interface Sponsors {
  sponsor?: {
    as?: {
      showAs: string;
      uri: string;
    };
    by?: {
      showAs: string;
      uri: string;
    };
    isPrimary: boolean;
  };
}

export interface Bill {
  billNo: string;
  billType: keyof typeof BillType;
  status: string;
  sponsors: Sponsors[];
  shortTitleEn: string;
  shortTitleGa: string;
}

export interface BillResponse {
  head: {
    counts: unknown;
    dateRange: unknown;
    lang: string;
  };
  results: {
    bill: Bill;
    billSort: unknown;
    contextDate: string;
  }[];
}
