import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TambahScreen({ navigation }) {
    const [nama, setNama] = useState('');
    const [stok, setStok] = useState('');
    const [lokasi, setLokasi] = useState('');

    const handleSimpan = () => {
        if (!nama || !stok || !lokasi) {
            Alert.alert('Error', 'Semua data form wajib diisi!');
            return;
        }

        const itemBaru = {
            id: Math.random().toString(),
            nama: nama,
            stok: parseInt(stok) || 0,
            lokasi: lokasi,
            standarQC: 'Standar Pabrik',
            statusQC: 'Belum Diinspeksi'
        };

        Alert.alert('Sukses', 'Barang baru berhasil terdaftar!');
        // Kirim balik data barang baru ke HomeScreen
        navigation.navigate('Home', { newItem: itemBaru });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.label}>Nama Barang:</Text>
                <TextInput style={styles.input} placeholder="Contoh: Mur M8" value={nama} onChangeText={setNama} />

                <Text style={styles.label}>Stok Awal:</Text>
                <TextInput style={styles.input} placeholder="Contoh: 100" keyboardType="numeric" value={stok} onChangeText={setStok} />

                <Text style={styles.label}>Lokasi Penyimpanan:</Text>
                <TextInput style={styles.input} placeholder="Contoh: Rak C-1" value={lokasi} onChangeText={setLokasi} />
            </View>

            <View style={{ gap: 10 }}>
                <Button title="Simpan Barang" color="green" onPress={handleSimpan} />
                <Button title="Batal" color="gray" onPress={() => navigation.goBack()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
    card: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 3 },
    label: { fontSize: 14, color: '#7f8c8d', marginTop: 10 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 8, marginTop: 5, backgroundColor: '#fff' }
});