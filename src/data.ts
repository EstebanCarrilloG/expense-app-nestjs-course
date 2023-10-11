export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid',
      source: 'salary',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
        id: 'uuid1',
        source: 'House rent',
        amount: 1000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
      {
        id: 'uuid2',
        source: 'Youtube',
        amount: 10000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

/*data.report.push({
    id:"uuid",
    source:"salary",
    amount:100,
    created_at: new Date(),
    updated_at: new Date(),
    type:ReportType.INCOME
})*/
