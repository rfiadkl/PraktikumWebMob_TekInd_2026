import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Platform, 
  TouchableOpacity, 
  Alert, 
  Image, 
  ScrollView // Latihan 2: ScrollView agar halaman bisa digulir
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Latihan 2: Membungkus seluruh konten agar bisa di-scroll */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Bagian Header */}
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            {/* Latihan 1: Menampilkan gambar logo (.jpg) */}
            <Image source={require('./logo.jpg')} style={styles.logo} />
            <View>
              <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
              <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
            </View>
          </View>
        </View>

        {/* Bagian Konten Utama */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Selamat Datang, Operator!</Text>
          
          {/* Langkah 3: Card Gudang A dengan interaksi Alert saat ditekan */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
          >
            <Text style={styles.cardTitle}>Status Gudang A</Text>
            <Text style={styles.cardValue}>Kapasitas: 85%</Text>
            <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
          </TouchableOpacity>

          {/* Card Gudang B */}
          <View style={[styles.card, styles.cardWarning]}>
            <Text style={styles.cardTitle}>Status Gudang B</Text>
            <Text style={styles.cardValue}>Kapasitas: 95%</Text>
            <Text style={[styles.cardStatus, styles.textWarning]}>PENUH</Text>
          </View>

          {/* ======================================================== */}
          {/* Tugas Proyek Mini: Profil Mesin (Sudah Digabung di Sini)   */}
          {/* ======================================================== */}
          <Text style={styles.sectionTitle}>Tugas Mini Proyek: Profil Mesin</Text>
          
          {/* 3a. Layout Profil Mesin */}
          <View style={styles.machineCard}>
            {/* Latihan 1: Menampilkan gambar mesin (.jpg) */}
            <Image 
              source={require('./mesin.jpg')} 
              style={styles.machineImage} 
            />
            
            {/* 3b. Detail Teks di Kanan menggunakan Flexbox Row */}
            <View style={styles.machineInfo}>
              <Text style={styles.machineName}>CNC Milling Machine Alpha</Text>
              <Text style={styles.machineDetail}>Tahun Pembuatan: 2024</Text>
              
              {/* Badge Status Mesin */}
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>OPERASIONAL</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#34495e',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    color: '#2c3e50',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3.84,
    elevation: 4,
  },
  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 5,
    textAlign: 'right',
  },
  textWarning: {
    color: '#e74c3c',
  },

  /* Styling Profil Mesin */
  machineCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row', // Foto di kiri, teks di kanan
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    marginTop: 5,
  },
  machineImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#cbd5e1',
  },
  machineInfo: {
    flex: 1,
    marginLeft: 16,
  },
  machineName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  machineDetail: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  statusBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#15803d',
  },
});