import React, { useState } from "react"
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    TouchableOpacity,
} from "react-native"

export default function DetailScreen({ route, navigation }) {

    const { barangDipilih } = route.params;

    const [stokLokal, setStokLokal] = useState(barangDipilih.stok);

    const tambahStok = () => {
        setStokLokal(stokLokal + 1);
    };

    const kurangStok = () => {
        if (stokLokal > 0) {
            setStokLokal(stokLokal - 1);
        }
    };

    const stokKritis = stokLokal < 5;
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Detail Barang</Text>

                <View style={styles.detailCard}>
                    <Text style={styles.label}>Nama Barang</Text>
                    <Text stylr={styles.valueTitle}>{barangDipilih.namaBarang}</Text>

                    <Text style={styles.label}>Kategori</Text>
                    <Text stylr={styles.valueText}>{barangDipilih.kategori}</Text>

                    <Text style={styles.label}>Stok Saat Ini</Text>
                    <Text stylr={styles.stockNumber}>{stokLokal}</Text>

                    <Text style={styles.label}>Lokasi Rak</Text>
                    <Text stylr={styles.valueText}>{barangDipilih.lokasiRak}</Text>
                </View>

                {stokKritis && (
                    <View style={styles.alertBox}>
                        <Text style={styles.alertTitle}>PERINGATAN STOK KRITIS</Text>
                        <Text style={styles.alertText}>Stok barang ini kurang dari 5. Segera lakukan restock</Text>
                    </View>
                )}

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.minusButton} onPress={kurangStok}>
                        <Text style={styles.buttonText}> - Kurangi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.plusButton} onPress={tambahStok}>
                        <Text style={styles.buttonText}> + Tambah</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>Kembali ke daftar barang</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Data ini dikirim dari halaman Home menggunakan navigation.navigate dan route.params</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f8fafc",
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
    infoBox: {
        backgroundColor: "#e0f2fe",
        padding: 16,
        borderRadius: 12,
    },
    detailCard: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 14,
        marginBottom: 16
    },
    namaBarang: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0f766e",
        marginBottom: 10,
    },
    infoText: {
        fontSize: 15,
        color: "#334155",
        marginBottom: 6,
    },
    label: {
        fontSize: 13,
        color: "#64748b",
        marginTop: 8,
    },
    valueTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0f766e",
    },
    valuetext: {
        fontSize: 16,
        color: "#334155",
        marginBottom: 6,
    },
    stockNumber: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#0f172a",
    },
    alertBox: {
        backgroundColor: "#fee2e2",
        borderLeftWidth: 6,
        borderLeftColor: "#dc2626",
        padding: 14,
        borderRadius: 12,
        marginBottom: 14,
    },
    alertTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#991b1b",
        marginBottom: 4,
    },
    alertText: {
        fontSize: 13,
        color: "#7f1d1d"
    },
    buttonRow: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 14,
    },
    minusButton: {
        flex: 1,
        backgroundColor: "#ef4444",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    plusButton: {
        flex: 1,
        backgroundColor: "#0f766e",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
    },
    backButton: {
        backgroundColor: "#e2e8f0",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    backButtonText: {
        color: "#0f172a",
        fontSize: 15,
        fontWeight: "bold"
    }


});