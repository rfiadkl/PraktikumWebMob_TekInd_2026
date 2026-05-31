import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

// Data Mock Inventori (Sama persis dengan modul dosen)
const DATA_INVENTORI = [
    { id: '1', nama: 'Baut M10', stok: 500, lokasi: 'Rak A-1', standarQC: 'ISO 9001 - Baja Ringan', statusQC: 'Belum Diinspeksi' },
    { id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Rak B-3', standarQC: 'SAE 40 - Pelumas Cair', statusQC: 'Belum Diinspeksi' },
    { id: '3', nama: 'Packing Kayu', stok: 100, lokasi: 'Gudang Luar', standarQC: 'ISPM 15 - Standar Kayu', statusQC: 'Belum Diinspeksi' },
    { id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2', standarQC: 'ISO 9001 - Ring Komponen', statusQC: 'Belum Diinspeksi' },
];

function HomeScreen({ navigation, route }) {
    const [inventori, setInventori] = useState(DATA_INVENTORI);

    // Menangkap data balik dari DetailScreen atau TambahScreen
    useEffect(() => {
        if (route.params?.updatedItem) {
            const target = route.params.updatedItem;
            setInventori(prev => prev.map(item => item.id === target.id ? target : item));
        }
        if (route.params?.newItem) {
            setInventori(prev => [...prev, route.params.newItem]);
        }
    }, [route.params?.updatedItem, route.params?.newItem]);

    // Fungsi Render Item untuk FlatList (Sama persis dengan modul)
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { itemData: item })}
        >
            {/* Proyek Mini 3c: Kondisi teks berubah merah jika Gagal QC */}
            <Text style={[
                styles.itemTitle,
                item.statusQC === 'Gagal' && { color: 'red', fontWeight: 'bold' }
            ]}>
                {item.nama} {item.statusQC === 'Gagal' && '(QC FAILED)'}
            </Text>

            <View style={styles.itemInfo}>
                <Text style={styles.itemSub}>Stok: {item.stok}</Text>
                <Text style={styles.itemSub}>{item.lokasi}</Text>
            </View>

            {/* Tambahan status info di bawah item */}
            <Text style={{ fontSize: 12, marginTop: 5, color: item.statusQC === 'Lolos' ? 'green' : item.statusQC === 'Gagal' ? 'red' : '#666' }}>
                Status QC: {item.statusQC || 'Belum Diinspeksi'}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Daftar Inventori Gudang</Text>
            <FlatList
                data={inventori}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* Latihan 2: Tombol Tambah Barang Baru di bagian bawah layar */}
            <View style={{ padding: 15 }}>
                <Button
                    title="+ Tambah Barang Baru"
                    onPress={() => navigation.navigate('Tambah')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    itemSub: {
        color: '#666',
    },
});

export default HomeScreen;