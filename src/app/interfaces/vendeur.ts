export interface Vendeur {
  '@id'?: string;
  nomMagasin?: string;
  dateCreationMagasin?: Date;
  articles?: string[];
  email?: string;
  roles?: any;
  password?: string;
  nom?: string;
  prenom?: string;
  dateNaissance?: Date;
  tel?: string;
  adresses?: string[];
  adress?: string[];
  readonly username?: string;
  readonly salt?: any;
  id?: string;
}
