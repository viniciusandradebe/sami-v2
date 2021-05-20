export const currency = (value, type) => {
    return value.toLocaleString('pt-br',{style: 'currency', currency: type});
} 