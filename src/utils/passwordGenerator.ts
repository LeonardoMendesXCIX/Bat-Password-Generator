import { PasswordOptions } from '../types';

export class PasswordGenerator {
  private static readonly UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private static readonly LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  private static readonly NUMBERS = '0123456789';
  private static readonly SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  private static readonly AMBIGUOUS = 'Il1O0';

  static generate(options: PasswordOptions): string {
    let charset = '';
    
    if (options.includeUppercase) charset += this.UPPERCASE;
    if (options.includeLowercase) charset += this.LOWERCASE;
    if (options.includeNumbers) charset += this.NUMBERS;
    if (options.includeSymbols) charset += this.SYMBOLS;
    
    if (options.excludeAmbiguous) {
      charset = charset.split('').filter(char => !this.AMBIGUOUS.includes(char)).join('');
    }
    
    if (charset.length === 0) {
      throw new Error('Por favor, selecione pelo menos um tipo de caractere');
    }
    
    let password = '';
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }
}
