export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeAmbiguous: boolean;
}

export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export interface GeneratedPassword {
  password: string;
  strength: PasswordStrength;
}
