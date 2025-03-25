import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Preencha os campos</Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Turma" style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONFIRMAR</Text>
            </TouchableOpacity>
            <Button title="Refazer" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#E0FFFF",
        height: "100vh",
        width: "100vw",
        padding: 20,
        gap: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "800",
        color: "#4682B4",
        textAlign: "center",
    },
    input: {
      width: 400,
      height: 40,
      padding: 10,
      borderWidth: 1.5,
      borderColor: "#4682B4",
      backgroundColor: "#F0FFFF",
      borderRadius: 5,
      color: "#4682B4",
      fontWeight: "700",
    },
    button: {
      width: 400,
      height: 40,
      backgroundColor: "#4682B4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "#F0FFFF",
      fontWeight: "700",
    }

});