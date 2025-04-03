import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Mock data for orders
const orders = [
  {
    id: '1',
    date: 'Apr 3, 2023',
    total: '$45.99',
    items: 5,
    status: 'Completed',
  },
  {
    id: '2',
    date: 'Mar 28, 2023',
    total: '$32.50',
    items: 3,
    status: 'Completed',
  },
  {
    id: '3',
    date: 'Mar 15, 2023',
    total: '$78.25',
    items: 7,
    status: 'Completed',
  },
  {
    id: '4',
    date: 'Mar 5, 2023',
    total: '$21.99',
    items: 2,
    status: 'Completed',
  },
  {
    id: '5',
    date: 'Feb 28, 2023',
    total: '$65.75',
    items: 6,
    status: 'Completed',
  },
];

export default function HistoryScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem}>
      <View style={styles.orderHeader}>
        <ThemedText type="defaultSemiBold">Order #{item.id}</ThemedText>
        <ThemedText>{item.date}</ThemedText>
      </View>
      <View style={styles.orderDetails}>
        <View style={styles.orderDetailItem}>
          <Ionicons name="cart-outline" size={20} color={tintColor} />
          <ThemedText style={styles.orderDetailText}>{item.items} items</ThemedText>
        </View>
        <View style={styles.orderDetailItem}>
          <Ionicons name="cash-outline" size={20} color={tintColor} />
          <ThemedText style={styles.orderDetailText}>{item.total}</ThemedText>
        </View>
        <View style={styles.orderDetailItem}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#4CAF50" />
          <ThemedText style={styles.orderDetailText}>{item.status}</ThemedText>
        </View>
      </View>
      <View style={styles.orderFooter}>
        <TouchableOpacity style={styles.orderActionButton}>
          <ThemedText style={styles.orderActionText}>View Details</ThemedText>
          <Ionicons name="chevron-forward" size={16} color={tintColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderActionButton}>
          <ThemedText style={styles.orderActionText}>Reorder</ThemedText>
          <Ionicons name="refresh-outline" size={16} color={tintColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Order History</ThemedText>
        <ThemedText>View your past orders and transactions</ThemedText>
      </ThemedView>

      <ThemedView style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="calendar-outline" size={20} color={tintColor} />
          <ThemedText style={styles.filterButtonText}>Last 30 Days</ThemedText>
          <Ionicons name="chevron-down" size={16} color={tintColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color={tintColor} />
          <ThemedText style={styles.filterButtonText}>Filter</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ordersList}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
  },
  filterButtonText: {
    marginHorizontal: 8,
  },
  ordersList: {
    paddingBottom: 16,
  },
  orderItem: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  orderDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderDetailText: {
    marginLeft: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 12,
  },
  orderActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderActionText: {
    marginRight: 4,
    color: '#0A7EA4',
  },
});
