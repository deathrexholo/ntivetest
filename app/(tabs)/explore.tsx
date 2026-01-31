import { IconSymbol } from '@/components/ui/icon-symbol';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <IconSymbol name="bell.fill" size={20} color="#fff" />
          </View>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Switch value={true} />
        </View>

        <View style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#5856D6' }]}>
            <IconSymbol name="moon.fill" size={20} color="#fff" />
          </View>
          <Text style={styles.rowLabel}>Dark Mode</Text>
          <Switch value={false} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Email</Text>
          <Text style={styles.rowValue}>user@example.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Version</Text>
          <Text style={styles.rowValue}>1.0.0 (Build 1)</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 25,
    overflow: 'hidden',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 8,
    marginLeft: 15,
    marginTop: 15,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },
  rowValue: {
    fontSize: 17,
    color: '#8E8E93',
  },
});
