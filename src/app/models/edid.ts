export interface Edid {
    'name': string
    'nativeResolution': string
    'size': number
    'status': number
    '_id': string
}

export interface EdidFromJson {
    'Name': string
    'NativeResolution': string
    'Size': number
    'status': number
}
export type Edids = Edid[]
