export interface Notification {
    header: string;
    subHeader: string;
    body: string;
    type: string;
    [key: string]: any;
}
