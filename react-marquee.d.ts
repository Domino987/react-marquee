declare module "react-marquee" {

    export default class Marquee extends React.Component<PropsMarquee> {

    }

    export type PropsMarquee = {
        text?: string;
        hoverToStop?: boolean;
        loop?: boolean;
        leading?: number;
        trailing?: number;
    }
}
