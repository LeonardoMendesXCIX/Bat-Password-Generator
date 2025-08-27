import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { PasswordOptions } from './src/types';
import { PasswordGenerator } from './src/utils/passwordGenerator';
import { CustomButton } from './src/components/CustomButton';
import { PasswordDisplay } from './src/components/PasswordDisplay';
import { OptionsPanel } from './src/components/OptionsPanel';

export default function App() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeAmbiguous: true,
  });
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePassword = () => {
    setIsGenerating(true);
    try {
      const password = PasswordGenerator.generate(options);
      setGeneratedPassword(password);
    } catch (error) {
      Alert.alert(
        'Erro',
        error instanceof Error ? error.message : 'Erro ao gerar senha'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    if (generatedPassword) {
      await Clipboard.setString(generatedPassword);
      Alert.alert('Sucesso', 'Senha copiada para a área de transferência!');
    }
  };

  const getPasswordStrength = (password: string): string => {
    if (password.length < 8) return 'Fraca';
    if (password.length < 12) return 'Média';
    if (password.length < 16) return 'Forte';
    return 'Muito Forte';
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>BAT-PASSWORD GENERATOR</Text>
          <Text style={styles.subtitle}>Sequenciador de Senhas do Batman</Text>
        </View>

        <PasswordDisplay
          password={generatedPassword}
          strength={getPasswordStrength(generatedPassword)}
          onCopy={copyToClipboard}
        />

        <OptionsPanel
          options={options}
          onOptionsChange={setOptions}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title={isGenerating ? "GERANDO..." : "GERAR SENHA"}
            onPress={generatePassword}
            variant="primary"
          />
          
          {generatedPassword && (
            <CustomButton
              title="COPIAR SENHA"
              onPress={copyToClipboard}
              variant="secondary"
            />
          )}
        </View>

        {generatedPassword && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Informações da Senha:</Text>
            <Text style={styles.infoText}>
              • Comprimento: {generatedPassword.length} caracteres
            </Text>
            <Text style={styles.infoText}>
              • Força: {getPasswordStrength(generatedPassword).toUpperCase()}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  infoContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
});
