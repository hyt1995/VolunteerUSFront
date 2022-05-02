declare global {
    interface Window {
        daum: {
            postcode: {
                load: (fn: () => void) => void;
                version: string;
                _validParam_: boolean;
            };
            Postcode: {
                new (postcodeOption: PostcodeOptions): Postcode;
            };
        };
    }
}

export interface PostcodeOptions {
    oncomplete?: (address: Address) => void;
    onresize?: (size: Size) => void;
    onclose?: (state: State) => void;
    onsearch?: (search: Search) => void;
    width?: string | number;
    height?: string | number;
    animation?: boolean;
    focusInput?: boolean;
    focusContent?: boolean;
    autoMapping?: boolean;
    shorthand?: boolean;
    pleaseReadGuide?: number;
    pleaseReadGuideTimer?: number;
    maxSuggestItems?: number;
    showMoreHName?: boolean;
    hideMapBtn?: boolean;
    hideEngBtn?: boolean;
    alwaysShowEngAddr?: boolean;
    submitMode?: boolean;
    useBannerLink?: boolean;
    theme?: Theme;
    useSuggest?: boolean;
}
