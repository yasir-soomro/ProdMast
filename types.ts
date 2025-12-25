export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    period: string;
    features: string[];
    highlight: boolean;
}

export interface StatItem {
    value: string;
    label: string;
    icon: any;
}

export enum AppSection {
    HOME = 'home',
    SERVICES = 'services',
    PRICING = 'pricing',
    AI_STUDIO = 'ai-studio',
    CONTACT = 'contact'
}