export interface Route {
  id: string;
  route: string;
  routeHour: string;
  points: Points[];
}

export interface Points {
  lat: number;
  lng: number;
  name: string;
}
