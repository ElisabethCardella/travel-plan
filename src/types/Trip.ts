type Stop = {
  city: string;
  date: string;
};

type Trip = {
  _id: string;
  name: string;
  stops: Stop[];
};

export default Trip;
