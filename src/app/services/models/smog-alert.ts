import { ISmogAlert } from '../dtos/smog-alert';

export class SmogAlert {
    lat: number;
    lng: number;
    index: number;
    level: string;
    description: string;
    advice: string;
    levelColor: string;
    PM1: number;
    PM25: number;
    PM10: number;
    pressure: number;
    humidity: number;
    temperature: number;

    constructor(dto?: ISmogAlert) {
        if (dto) {
            this.lat = dto.lat;
            this.lng = dto.lng;
            this.index = dto.index;
            this.level = dto.level;
            this.description = dto.description;
            this.advice = dto.advice;
            this.levelColor = dto.levelColor;
            this.PM1 = dto.PM1;
            this.PM25 = dto.PM25;
            this.PM10 = dto.PM10;
            this.pressure = dto.pressure;
            this.humidity = dto.humidity;
            this.temperature = dto.temperature;
        }
    }
}
