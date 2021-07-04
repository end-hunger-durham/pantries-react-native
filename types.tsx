export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabs = "MapTab" | "ListTab";

export type BottomTabParamList = {
  MapTab: undefined;
  ListTab: undefined;
};

export type TabOneParamList = {
  Map: undefined;
};

export type TabTwoParamList = {
  List: undefined;
};

export type Pantry = {
  geometry: {
      coordinates: [number, number],
  },
  properties: {
      comments: string;
      fulladdr: string;
      last_edited_date: string;
      name: string;
      operdays: string;
      operhours: string;
      phone: string | null;
      pocemail: string | null;
      pocname: string | null;
      pocphone: string | null;
      readytoeatmeals: string | null;
  },
};
