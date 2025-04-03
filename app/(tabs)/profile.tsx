import { Image, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.container}>
        {/* Profile Header */}
        <ThemedView style={styles.profileHeader}>
          <Image 
            source={require('@/assets/images/icon.png')} 
            style={styles.profileImage} 
          />
          <ThemedText type="title">John Doe</ThemedText>
          <ThemedText>john.doe@example.com</ThemedText>
          <ThemedText>Member since: Jan 2023</ThemedText>
        </ThemedView>

        {/* Account Info */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Account Information</ThemedText>
          <View style={styles.infoItem}>
            <ThemedText type="defaultSemiBold">User ID:</ThemedText>
            <ThemedText>123456789</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText type="defaultSemiBold">Phone:</ThemedText>
            <ThemedText>+1 (555) 123-4567</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <ThemedText type="defaultSemiBold">Address:</ThemedText>
            <ThemedText>123 Main St, Anytown, USA</ThemedText>
          </View>
        </ThemedView>

        {/* Preferences */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Preferences</ThemedText>
          <TouchableOpacity style={styles.preferenceItem}>
            <View style={styles.preferenceIconContainer}>
              <Ionicons name="notifications-outline" size={24} color={tintColor} />
            </View>
            <View style={styles.preferenceTextContainer}>
              <ThemedText type="defaultSemiBold">Notifications</ThemedText>
              <ThemedText>Manage your notification settings</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.preferenceItem}>
            <View style={styles.preferenceIconContainer}>
              <Ionicons name="language-outline" size={24} color={tintColor} />
            </View>
            <View style={styles.preferenceTextContainer}>
              <ThemedText type="defaultSemiBold">Language</ThemedText>
              <ThemedText>English (US)</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.preferenceItem}>
            <View style={styles.preferenceIconContainer}>
              <Ionicons name="moon-outline" size={24} color={tintColor} />
            </View>
            <View style={styles.preferenceTextContainer}>
              <ThemedText type="defaultSemiBold">Dark Mode</ThemedText>
              <ThemedText>System default</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
          </TouchableOpacity>
        </ThemedView>

        {/* Payment Methods */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Payment Methods</ThemedText>
          <TouchableOpacity style={styles.paymentItem}>
            <View style={styles.paymentIconContainer}>
              <Ionicons name="card-outline" size={24} color={tintColor} />
            </View>
            <View style={styles.paymentTextContainer}>
              <ThemedText type="defaultSemiBold">Credit Card</ThemedText>
              <ThemedText>**** **** **** 1234</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentItem}>
            <View style={styles.paymentIconContainer}>
              <Ionicons name="wallet-outline" size={24} color={tintColor} />
            </View>
            <View style={styles.paymentTextContainer}>
              <ThemedText type="defaultSemiBold">Add Payment Method</ThemedText>
              <ThemedText>Add a new card or payment option</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#A0A0A0" />
          </TouchableOpacity>
        </ThemedView>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
          <ThemedText style={styles.logoutText}>Log Out</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  preferenceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  preferenceTextContainer: {
    flex: 1,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  paymentTextContainer: {
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFF0F0',
    marginBottom: 24,
  },
  logoutText: {
    color: '#FF3B30',
    marginLeft: 8,
    fontWeight: '600',
  },
}); 