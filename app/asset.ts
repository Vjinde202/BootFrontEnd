export class Asset 
{
    id!: number;
    assetName!: String;
    assetModel!: String;
    assetOS !: String;
    warranty!: String;
    purchaseAmount!: number;

}

export class Request {
    id!: number;
    empName!: string;
    role!: string;
    assetRequried!: string;
    address!: string;
    phoneNumber!: number;
    emailId!: string;
}
