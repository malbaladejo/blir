export class DurationValue {
    label: string;
    constructor(public value: number) {
        this.label = value.toString().padStart(2, '0');
    }
}
