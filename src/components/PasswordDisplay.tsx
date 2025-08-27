import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
  strength: string;
}

export const PasswordDisplay: React.FC<PasswordDisplayProps> = ({
  password,
  onCopy,
  strength,
}) => {
  const getStrengthColor = (strength: string): string => {
    switch (strength.toLowerCase()) {
      case 'fraca':
        return '#ff4444';
      case 'média':
        return '#ff8800';
      case 'forte':
        return '#44ff44';
      case 'muito forte':
        return '#00ff00';
      default:
        return '#888888';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordText} selectable>
          {password || 'Sua senha aparecerá aqui'}
        </Text>
        <TouchableOpacity onPress={onCopy} style={styles.copyButton}>
          <Text style={styles.copyButtonText}>📋</Text>
        </TouchableOpacity>
      </View>
      {password && (
        <View style={styles.strengthContainer}>
          <Text style={styles.strengthLabel}>Força:</Text>
          <Text style={[styles.strengthText, { color: getStrengthColor(strength) }]}>
            {strength}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  passwordText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#fff',
    letterSpacing: 1,
  },
  copyButton: {
    padding: 8,
    marginLeft: 8,
  },
  copyButtonText: {
    fontSize: 20,
  },
  strengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  strengthLabel: {
    color: '#ccc',
    marginRight: 8,
  },
  strengthText: {
    fontWeight: 'bold',
  },
});
