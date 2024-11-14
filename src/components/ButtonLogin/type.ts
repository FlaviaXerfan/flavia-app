export interface ProposButton {
    title?: string | undefined; //pode ser desta forma ou como ternário como feito aabaixo
    propsBackgroundColor?: string;
    handleFunction: () => void;
    icon?: any;
    
}