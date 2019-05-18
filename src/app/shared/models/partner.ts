import { DataType } from './data-type.model';

export interface Partner extends DataType {
    id: string;
    link: string;
    logoUrl: string;
    name: string;
}
