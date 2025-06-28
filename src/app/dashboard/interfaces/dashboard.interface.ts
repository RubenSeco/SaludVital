export interface MedicalService {
  title: string;
  description: string;
  icon: string;
  list1: string;
  list2: string;
  list3: string;
};
export interface ContactInformation {
  title: string;
  description: string;
  icon: string;
  list1?: string;
  list2?: string;
  list3?: string;
};

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Doctor {

  name: string;
  specialty: string;
  experience: string;
  image: string;
  list1: string;
  list2: string;
  list3: string;
}

export interface MenuItem {
  title: string;
  fragment: string;
}

