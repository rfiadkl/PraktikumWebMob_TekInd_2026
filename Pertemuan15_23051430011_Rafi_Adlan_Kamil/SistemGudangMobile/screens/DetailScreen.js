import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

function DetailScreen({ route, navigation }) {
    // Menerima data yang dikirim dari HomeScreen (Sama persis dengan modul)
    const { itemData } = route.params;
    const [item, setItem] = useState(itemData);

    const handleUpdateStatus = (status) => {
        const updated = { ...item, statusQC: status };
        setItem(updated);
        Alert.alert('Pembaruan QC', `Item dinyatakan: ${status}`);
        // Kirim balik ke HomeScreen agar warna teks berubah
        navigation.navigate('Home', { updatedItem: updated });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Nama Barang:</Text>
                <Text style={styles.value}>{item.nama}</Text>

                <Text style={styles.label}>Stok Saat Ini:</Text>
                <Text style={[styles.value, item.stok < 20 ? styles.dangerText : styles.successText]}>
                    {item.stok} Unit
                </Text>

                <Text style={styles.label}>Lokasi Penyimpanan:</Text>
                <Text style={styles.value}>{item.lokasi}</Text>

                {/* Latihan 1: Jika stok = 0, munculkan tombol Request Stok Darurat */}
                {item.stok === 0 && (
                    <View style={{ marginTop: 15 }}>
                        <Button
                            title="🚨 Request Stok Darurat"
                            color="orange"
                            onPress={() => Alert.alert('Darurat', `Notifikasi kebutuhan stok ${item.nama} telah dikirim.`)}
                        />
                    </View>
                )}

                {/* Proyek Mini 3b: Pilihan Status Kelayakan (Lolos/Gagal) */}
                <Text style={[styles.label, { marginTop: 20 }]}>Status Kelayakan Kualitas (QC):</Text>
                <Text style={{ fontWeight: 'bold', marginVertical: 5, color: item.statusQC === 'Gagal' ? 'red' : 'green' }}>
                    Status Saat Ini: {item.statusQC || 'Belum Diinspeksi'}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, gap: 10 }}>
                    <TouchableOpacity
                        style={{ flex: 1, backgroundColor: 'green', padding: 10, borderRadius: 5, alignItems: 'center' }}
                        onPress={() => handleUpdateStatus('Lolos')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Set LOLOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, backgroundColor: 'red', padding: 10, borderRadius: 5, alignItems: 'center' }}
                        onPress={() => handleUpdateStatus('Gagal')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Set GAGAL</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Tombol bawaan dari modul dosen */}
            <Button title="Kembali ke Daftar" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        color: '#7f8c8d',
        marginTop: 10,
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    dangerText: {
        color: 'red',
    },
    successText: {
        color: 'green',
    }
});

export default DetailScreen;