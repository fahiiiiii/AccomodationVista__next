declare module 'react-slick' {
    import { Component } from 'react';

    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        // Add more settings as needed
    }

    export default class Slider extends Component<Settings> {}
}