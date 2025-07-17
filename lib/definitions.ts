export interface Block {
    name: string,
    boundaries: string,
    email: string,
    phone: string,
    website: string,
    id: string,
    coords: Array<L.LatLngExpression>
}