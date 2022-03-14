export type formData = {
  name: string;
  sex: string;
  hobby: string;
  active: boolean;
  birth_date: Date;
  level_id: number;
};

export type Information = {
  id: string;
  name: string;
  sex: string;
  hobby: string;
  active: boolean;
  birth_date: Date;
  created_at: Date;
  updated_at: Date;
  level_id: number;
  level_description: string;
};

export type Action = {
  type: 'create' | 'edit' | 'delete';
};

export type developerType = {
  id: string;
  name: string;
  sex: string;
  hobby: string;
  active: boolean;
  birth_date: Date;
  created_at: Date;
  updated_at: Date;
  level_id: number;
  level_description: string;
};

export type responseType = {
  meta: any;
  data: developerType[];
};
