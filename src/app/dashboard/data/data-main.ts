import { Service, MedicalService, Doctor } from '../interfaces/main.interface';


export const services: Service[] = [
  {
    title: "24/7 Emergencias",
    description: "Atención las 24 hrs.",
    icon: "icon-[mdi-light--clock]"
  },
  {
    title: "Médicos expertos",
    description: "Especialistas certificados",
    icon: "icon-[mdi-light--shield]"
  },
  {
    title: "Obtener facilmente",
    description: "Turnos online",
    icon: "icon-[mdi-light--calendar]"
  },

];

export const medicalServices: MedicalService[] = [
  {
    title: 'Cardiología',
    description:
      'Atención cardíaca completa que incluye diagnóstico, tratamiento y atención preventiva para la salud cardiovascular.',
    icon: 'icon-[lucide--heart]',
    list1: 'Electrocardiograma',
    list2: 'Cirugía cardíaca',
    list3: 'Atención preventiva',
  },
  {
    title: 'Neurología',
    description:
      'Atención neurológica experta para trastornos del cerebro, la columna vertebral y el sistema nervioso con opciones de tratamiento avanzadas.',
    icon: 'icon-[lucide--brain]',
    list1: 'Imagenología cerebral',
    list2: 'Atención de accidentes cerebrovasculares',
    list3: 'Neuroterapia',
  },
  {
    title: 'Oftalmología',
    description:
      'Atención médica especializada en el diagnóstico y tratamiento de enfermedades de la vista.',
    icon: 'icon-[lucide--eye]',
    list1: 'Cirugía de vista',
    list2: 'Atención preventiva',
    list3: 'Tratamiento de enfermedades de la vista',
  },
  {
    title: 'Ortopedia',
    description:
      'Tratamiento para afecciones óseas, articulares y musculares con opciones quirúrgicas y no quirúrgicas.',
    icon: 'icon-[lucide--bone]',
    list1: 'Reemplazo de articulaciones',
    list2: 'Medicina deportiva',
    list3: 'Fisioterapia',
  },
  {
    title: 'Pediatria',
    description:
      'Atención médica especializada en el cuidado de niños y adolescentes, incluyendo la atención de enfermedades y trastornos de la salud física y mental.',
    icon: 'icon-[cil--child]',
    list1: 'Cirugía pediátrica',
    list2: 'Atención preventiva',
    list3: 'Tratamiento de enfermedades pediátricas',
  },
  {
    title: 'Medicina General',
    description:
      'Servicios de atención primaria para adultos, incluyendo atención preventiva y tratamiento de enfermedades comunes.',
    icon: 'icon-[lucide--stethoscope]',
    list1: 'Revision de salud',
    list2: 'Atención crónica',
    list3: 'Medicina preventiva',
  },
];

export const doctors: Doctor[] = [
  {
    name: 'Dr. Jane Smith',
    specialty: 'Cardiología',
    image: 'Dr_Smith.jpg',
    experience: '10+ años de experiencia',
    list1: 'Cirugía del corazón',
    list2: 'Cardiología preventiva',
    list3: 'Estudios de cardiología',
  },
  {
    name: 'Dr. Michael Johnson',
    specialty: 'Neurocirugía',
    image: 'Dr_Johnson.png',
    experience: '15+ años de experiencia',
    list1: 'Cuidado intensivo',
    list2: 'Epilepsia',
    list3: 'Desordenes neurologicos',
  },
  {
    name: 'Dr. Emily Davis',
    specialty: 'Pediatria',
    image: 'Dr_Davis.jpeg',
    experience: '12+ años de experiencia',
    list1: 'Desarrollo de niños',
    list2: 'Medicina adolescentes',
    list3: 'Programa de vacunación',
  },
];
