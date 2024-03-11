export type Suggestion = {
    name:           string;
    mapboxID:       string;
    featureType:    string;
    place_formatted: string;
    context:        Context;
    language:       string;
    maki:           string;
}

export type Context = {
    country?: Country;
    region?:  Region;
    postcode?: Postcode;
    place?:    Place;
    address?:  Address;
    street?:   Street;
}

export type Country = {
    id?:                string;
    name:              string;
    countryCode:       string;
    countryCodeAlpha3: string;
}


export type Address = {
    name:          string;
    addressNumber: string;
    streetName:    string;
}

export type Place = {
    id:   string;
    name: string;
}

export type Street = {
    name: string;
}

export type Postcode = {
    id:   string;
    name: string;
}

export type Region = {
    id:             string;
    name:           string;
    regionCode:     string;
    regionCodeFull: string;
}
