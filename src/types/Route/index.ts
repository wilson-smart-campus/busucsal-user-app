export interface IRoute {
  id: string;
  route: string;
  routeHour: string;
  points: IPoints[];
}

export interface IPoints {
  lat: number;
  lng: number;
  name: string;
}
