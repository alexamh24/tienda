
export interface User {
  id: number;
  nombre: string;
  email: string;
  password?: string; // opcional, por seguridad no siempre se retorna
  role?: string;     // admin, user, etc.
  activo: boolean;
}
