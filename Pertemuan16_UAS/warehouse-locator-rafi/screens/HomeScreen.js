import React, { useState, useMemo } from "react"
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    FlatList,
    StatusBar,
    TouchableOpacity,
} from "react-native"

const DATA_GUDANG = [
    {
        id: "WH-001",
        namaBarang: "Roller Conveyor Cadangan",
        kategori: "Sparepart Mesin",
        stok: 16,
        lokasiRak: "Zona A - Rak 01",
    },
    {
        id: "WH-002",
        namaBarang: "Box Karton Ukuran M",
        kategori: "Packaging",
        stok: 42,
        lokasiRak: "Zona b - Rak 03",
    },
    {
        id: "WH-003",
        namaBarang: "Sarung Tangan",
        kategori: "APD",
        stok: 25,
        lokasiRak: "Zona C - Rak 02",
    },
    {
        id: "WH-004",
        namaBarang: "Oli Gearbox 1 Liter ",
        kategori: "Maintenance",
        stok: 7,
        lokasiRak: "Zona A - Rak 04",
    },
    {
        id: "WH-005",
        namaBarang: "Label Barcode",
        kategori: "Administrasi Gudang",
        stok: 31,
        lokasiRak: "Zona D - Rak 01",
    },
    {
        id: "WH-006",
        namaBarang: "Baut Hexagonal",
        kategori: "Fastener",
        stok: 80,
        lokasiRak: "Zona E - Rak 02",
    },
    {
        id: "WH-007",
        namaBarang: "Lakban",
        kategori: "Packaging",
        stok: 18,
        lokasiRak: "Zona B - Rak 01",
    },
    {
        id: "WH-008",
        namaBarang: "Kabel Hitam 20m",
        kategori: "Utility",
        stok: 35,
        lokasiRak: "Zona F - Rak 01",
    },
    {
        id: "WH-009",
        namaBarang: "Masker Respirator",
        kategori: "APD",
        stok: 9,
        lokasiRak: "Zona C - Rak 04",
    },
    {
        id: "WH-010",
        namaBarang: "Sensor Induktif",
        kategori: "Elektrikal",
        stok: 4,
        lokasiRak: "Zona A - Rak 06",
    }
]

export default function HomeScreen({ navigation }) {
    const [kataCari, setKataCari] = useState("")
    const [isSorted, setIsSorted] = useState(false);

    const dataTersaring = useMemo(() => {
        let hasilFilter = DATA_GUDANG.filter((barang) => {
            const teksCari = kataCari.toLowerCase();
            return (
                barang.namaBarang.toLowerCase().includes(teksCari) ||
                barang.kategori.toLowerCase().includes(teksCari) ||
                barang.lokasiRak.toLowerCase().includes(teksCari) ||
                barang.id.toLowerCase().includes(teksCari)
            );
        });
        if (isSorted) {
            hasilFilter = [...hasilFilter].sort((a, b) =>
                a.namaBarang.localeCompare(b.namaBarang)
            );
        }
        return hasilFilter;
    }, [kataCari, isSorted]);

    const renderBarang = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.cardBarang}
                onPress={() => navigation.navigate("Detail", { barangDipilih: item })}
            >
                <View style={styles.rowBetween}>
                    <Text style={styles.namaBarang}>{item.namaBarang}</Text>
                    <Text style={styles.kodeBarang}>{item.id}</Text>
                </View>

                <TouchableOpacity
                    style={styles.sortButton}
                    onPress={() => setIsSorted(!isSorted)}
                >
                    <Text style={styles.sortButtonText}>
                        {isSorted
                            ? "Kembali ke Urutan awal"
                            : "Urutkan Nama A-Z"}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.detailText}>Kategori: {item.kategori}</Text>
                <Text style={styles.detailText}>Stok: {item.stok}</Text>
                <Text style={styles.lokasiText}>Lokasi: {item.lokasiRak}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Warehouse Locator</Text>

                <Text style={styles.subtitle}>Cari barang berdasarkan nama, kategori, ID. atau lokasi rak</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari barang gudang..."
                    value={kataCari}
                    onChangeText={setKataCari}
                />

                <Text style={styles.resultInfo}>Menampilkan {dataTersaring.length} dari {DATA_GUDANG.length} barang</Text>

                <FlatList
                    data={dataTersaring}
                    renderItem={renderBarang}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f1f5f9",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        padding: 20
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        color: "#475569",
        marginBottom: 18,
    },
    card: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 14,
        marginBottom: 18,
    },
    cardTitle: {
        fontSize: 18,
        color: "#0f766e",
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        color: "#334155",
        marginBottom: 4,
    },
    note: {
        fontSize: 14,
        color: "#64748b",
        lineHeight: 20,
    },
    searchInput: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 12,
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#cbd5e1",
        marginBottom: 10,
    },
    resultInfo: {

        fontSize: 13,
        color: "#64748b",
        marginbottom: 10,
    },
    listContent: {
        paddingBottom: 24,
    },
    cardBarang: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 14,
        marginBottom: 12,
        borderLeftWidth: 5,
        borderLeftColor: "#0f766e",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        marginBottom: 6,
    },
    namaBarang: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: "#0f172a",
    },
    kodeBarang: {
        fontSize: 12,
        color: "#0f766e",
        fontWeight: "bold",
    },
    detailText: {
        fontSize: 13,
        color: "#334155",
        marginbottom: 2,
    },
    lokasiText: {
        fontSize: 13,
        color: "#475569",
        fontWeight: "600",
        marginTop: 4,
    },
    sortButton: {
        backgroundColor: "#1d4ed8",
        padding: 12,
        borderRadius: 10,
        marginbottom: 12,
        alignItems: "center"
    },
    sortButtonText: {
        color: "#ffffff",
        fontWeight: "bold"
    },
});