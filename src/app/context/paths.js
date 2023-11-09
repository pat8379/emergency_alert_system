export const getPath = (item, scenario) => {
    if (scenario === 1) {
        switch (item) {
            case 1:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 2:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 3:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 'top', 'top', 0, 
                    0, 0, 0, 0, 0,
                ];
            case 4:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 5:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 0, 0, 0,
                ];    
            case 6:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 'top', 'top', 0,
                ];            
            default:
                break;
        }
    } else {
        switch (item) {
            case 1:
                return [
                    0, 'left', 0, 0, 0,
                    0, 'left', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 2:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 3:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 0, 0, 0, 0, 
                    0, 'top', 'top', 'top', 0, 
                    0, 0, 0, 0, 0,
                ];
            case 4:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 'bottom', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 0, 0, 0, 0,
                ];
            case 5:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 'bottom', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 0, 0, 0,
                ];    
            case 6:
                return [
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 
                    0, 'bottom', 0, 0, 0, 
                    0, 'left', 0, 0, 0, 
                    0, 'top', 'top', 'top', 0,
                ];            
            default:
                break;
        }
    }
    
}