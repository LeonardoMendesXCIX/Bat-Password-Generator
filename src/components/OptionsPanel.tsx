import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { PasswordOptions } from '../types';

interface OptionsPanelProps {
  options: PasswordOptions;
  onOptionsChange: (options: PasswordOptions) => void;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({
  options,
  onOptionsChange,
}) => {
  const updateOption = (key: keyof PasswordOptions, value: any) => {
    onOptionsChange({ ...options, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opções de Senha</Text>
      
      <View style={styles.optionGroup}>
        <Text style={styles.label}>Comprimento: {options.length}</Text>
        <Slider
          style={styles.slider}
          minimumValue={4}
          maximumValue={32}
          step={1}
          value={options.length}
          onValueChange={(value) => updateOption('length', Math.round(value))}
          minimumTrackTintColor="#FFD700"
          maximumTrackTintColor="#333"
          thumbTintColor="#FFD700"
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>Incluir maiúsculas</Text>
        <Switch
          value={options.includeUppercase}
          onValueChange={(value) => updateOption('includeUppercase', value)}
          trackColor={{ false: '#333', true: '#FFD700' }}
          thumbColor={options.includeUppercase ? '#000' : '#666'}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>Incluir minúsculas</Text>
        <Switch
          value={options.includeLowercase}
          onValueChange={(value) => updateOption('includeLowercase', value)}
          trackColor={{ false: '#333', true: '#FFD700' }}
          thumbColor={options.includeLowercase ? '#000' : '#666'}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>Incluir números</Text>
        <Switch
          value={options.includeNumbers}
          onValueChange={(value) => updateOption('includeNumbers', value)}
          trackColor={{ false: '#333', true: '#FFD700' }}
          thumbColor={options.includeNumbers ? '#000' : '#666'}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>Incluir símbolos</Text>
        <Switch
          value={options.includeSymbols}
          onValueChange={(value) => updateOption('includeSymbols', value)}
          trackColor={{ false: '#333', true: '#FFD700' }}
          thumbColor={options.includeSymbols ? '#000' : '#666'}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.label}>Excluir caracteres ambíguos</Text>
        <Switch
          value={options.excludeAmbiguous}
          onValueChange={(value) => updateOption('excludeAmbiguous', value)}
          trackColor={{ false: '#333', true: '#FFD700' }}
          thumbColor={options.excludeAmbiguous ? '#000' : '#666'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 16,
  },
  optionGroup: {
    marginBottom: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
