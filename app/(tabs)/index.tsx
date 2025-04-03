import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

// Define the type for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any; // Using any for the image source since it's a require statement
}

// Mock data for cart items
const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    price: 3.99,
    quantity: 2,
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '2',
    name: 'Whole Grain Bread',
    price: 4.50,
    quantity: 1,
    image: require('@/assets/images/icon.png'),
  },
  {
    id: '3',
    name: 'Almond Milk',
    price: 5.99,
    quantity: 1,
    image: require('@/assets/images/icon.png'),
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  // Calculate total cost
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <ThemedView style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
        <ThemedText>${item.price.toFixed(2)}</ThemedText>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton}>
          <Ionicons name="remove" size={20} color={tintColor} />
        </TouchableOpacity>
        <ThemedText style={styles.quantityText}>{item.quantity}</ThemedText>
        <TouchableOpacity style={styles.quantityButton}>
          <Ionicons name="add" size={20} color={tintColor} />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      {/* Profile Section */}
      <ThemedView style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image 
            source={require('@/assets/images/icon.png')} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <ThemedText type="title">John Doe</ThemedText>
            <ThemedText>ID: 123456789</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Scanner Section */}
      <ThemedView style={styles.scannerSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Scan Product</ThemedText>
        <TouchableOpacity style={styles.scannerButton}>
          <View style={styles.scannerIconContainer}>
            <Ionicons name="scan-outline" size={60} color={tintColor} />
          </View>
          <ThemedText style={styles.scannerText}>Tap to scan barcode</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.scannerHint}>
          Position the barcode within the frame to scan
        </ThemedText>
      </ThemedView>

      {/* Cart Section */}
      <ThemedView style={styles.cartSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Your Cart</ThemedText>
        
        {cartItems.length > 0 ? (
          <>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.cartList}
            />
            
            <ThemedView style={styles.cartSummary}>
              <View style={styles.summaryRow}>
                <ThemedText type="defaultSemiBold">Subtotal:</ThemedText>
                <ThemedText>${totalCost.toFixed(2)}</ThemedText>
              </View>
              <View style={styles.summaryRow}>
                <ThemedText type="defaultSemiBold">Tax (8%):</ThemedText>
                <ThemedText>${(totalCost * 0.08).toFixed(2)}</ThemedText>
              </View>
              <View style={[styles.summaryRow, styles.totalRow]}>
                <ThemedText type="defaultSemiBold">Total:</ThemedText>
                <ThemedText type="defaultSemiBold">${(totalCost * 1.08).toFixed(2)}</ThemedText>
              </View>
            </ThemedView>
            
            <TouchableOpacity style={styles.checkoutButton}>
              <ThemedText style={styles.checkoutButtonText}>Proceed to Checkout</ThemedText>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </>
        ) : (
          <ThemedView style={styles.emptyCart}>
            <Ionicons name="cart-outline" size={60} color="#A0A0A0" />
            <ThemedText style={styles.emptyCartText}>Your cart is empty</ThemedText>
            <ThemedText>Scan products to add them to your cart</ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    marginBottom: 20,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  scannerSection: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
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
  scannerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#A1CEDC',
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  scannerIconContainer: {
    marginBottom: 8,
  },
  scannerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  scannerHint: {
    fontSize: 14,
    opacity: 0.7,
  },
  cartSection: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cartList: {
    paddingBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  cartSummary: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A7EA4',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginRight: 8,
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
});
